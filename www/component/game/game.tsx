import {useCallback, useMemo, useState} from 'react';
import {useScreenSize} from 'react-system-hook';

import {useSingleTouch} from '../../hook/single-touch-hook/single-touch-hook';
import {SingleTouchCoordinatesType} from '../../hook/single-touch-hook/single-touch-type';
import {getRandomItem} from '../../util/array';
import {classNames} from '../../util/css';
import {playAudio} from '../../hook/audio-player-hook/audio-player-helper';
import {getRandomBoolean} from '../../util/boolean';

import gameStyle from './game.scss';
import {foodToImage, getDefaultCoordinates, getDropPlaceData, getIsInPlace, getQuestionFoodList} from './game-helper';
import {ArrayTrioType, FoodImageType, OnAnswerType} from './game-type';
import {AnimalType} from './task/animal/animal-type';
import {FoodEnum, FoodType} from './task/food/food-type';

type PropsType = {
    animal: AnimalType;
    isSfxEnabled: boolean;
    onGoodAnswer: OnAnswerType;
    onWrongAnswer: OnAnswerType;
};

export function Game(props: PropsType): JSX.Element {
    const {onGoodAnswer, animal, onWrongAnswer, isSfxEnabled} = props;
    const [animalImage] = useState<string>(getRandomItem<string>(animal.imageList));
    const [isSwiped] = useState<boolean>(getRandomBoolean());
    const [questionFoodList] = useState<ArrayTrioType<FoodType>>(() => getQuestionFoodList(animal));
    const [questionFoodImageList] = useState<ArrayTrioType<FoodImageType>>([
        foodToImage(questionFoodList[0]),
        foodToImage(questionFoodList[1]),
        foodToImage(questionFoodList[2]),
    ]);
    const {width, height} = useScreenSize();
    const minScreenSize = Math.min(width, height);
    const dishSize = Math.round(minScreenSize / 3.5);
    const halfDishSize = Math.round(dishSize / 2);
    const dropPlaceData = useMemo(
        () => getDropPlaceData({dishSize, screen: {height, width}}),
        [dishSize, height, width]
    );
    const [attemptCount, setAttemptCount] = useState<number>(0);
    const [activeBlockId, setActiveBlockId] = useState<FoodEnum | ''>('');

    const onTouchEnd = useCallback(
        (touchEndCoordinates: SingleTouchCoordinatesType) => {
            const extraAccuracy = 20;
            const isInDropPlace = getIsInPlace(touchEndCoordinates, {
                height: dropPlaceData.height - extraAccuracy * 2,
                left: dropPlaceData.left + extraAccuracy,
                top: dropPlaceData.top + extraAccuracy,
                width: dropPlaceData.width - extraAccuracy * 2,
            });

            if (isInDropPlace && activeBlockId) {
                const newAttemptCount = attemptCount + 1;

                setAttemptCount(newAttemptCount);
                const onAnswerData = {attemptCount: newAttemptCount};

                if (animal.foodIdList.includes(activeBlockId)) {
                    onGoodAnswer(onAnswerData);
                } else {
                    onWrongAnswer(onAnswerData);
                }
            }

            setActiveBlockId('');
        },
        [animal, dropPlaceData, onGoodAnswer, onWrongAnswer, activeBlockId, attemptCount]
    );

    const singleTouchArgument = useMemo(() => ({id: 'game', onTouchEnd}), [onTouchEnd]);

    const {coordinates, isPressed} = useSingleTouch(singleTouchArgument);

    return (
        <div className={gameStyle.game}>
            {questionFoodImageList.map((questionFoodImage: FoodImageType, index: number): JSX.Element => {
                const {src} = questionFoodImage;
                const defaultCoordinates = getDefaultCoordinates({dishSize, height, index, width});

                return (
                    <div
                        className={gameStyle.plate}
                        key={`plate-${src}`}
                        style={{
                            height: dishSize,
                            left: defaultCoordinates.pageX,
                            top: defaultCoordinates.pageY,
                            width: dishSize,
                        }}
                    />
                );
            })}

            <div className={gameStyle.event_hunter} onTouchStart={() => setActiveBlockId('')}>
                <button
                    className={gameStyle.drop_place}
                    onClick={() => {
                        playAudio({
                            isMuted: !isSfxEnabled,
                            src: getRandomItem<string>(animal.soundList),
                        });
                    }}
                    style={dropPlaceData}
                    type="button"
                >
                    <img
                        alt={animal.id}
                        className={classNames(gameStyle.drop_place_image, {
                            [gameStyle.drop_place_image__swiped]: isSwiped,
                        })}
                        src={animalImage}
                    />
                </button>
            </div>

            {questionFoodList.map((questionFood: FoodType, index: number): JSX.Element => {
                const {id} = questionFood;
                const isActiveBlock: boolean = id === activeBlockId && isPressed;
                const transformCoordinates: SingleTouchCoordinatesType = isActiveBlock
                    ? coordinates
                    : getDefaultCoordinates({dishSize, height, index, width});

                const translateX = transformCoordinates.pageX - halfDishSize;
                const translateY = transformCoordinates.pageY - halfDishSize;

                const blockZIndex = 2;
                const blockZIndexActive = 3;
                const transform = `translate3d(${translateX}px,${translateY}px,0px)`;
                const {src, isReversed} = questionFoodImageList[index];

                return (
                    <div
                        className={classNames(gameStyle.action_block, {
                            [gameStyle.action_block__active]: isActiveBlock,
                        })}
                        key={'food-' + src}
                        onTouchStart={() => setActiveBlockId(id)}
                        style={{
                            height: dishSize,
                            transform,
                            width: dishSize,
                            zIndex: isActiveBlock ? blockZIndexActive : blockZIndex,
                        }}
                    >
                        <img
                            alt={id}
                            className={classNames(gameStyle.action_block__image, {
                                [gameStyle.action_block__image__flip]: isReversed,
                            })}
                            src={src}
                        />
                    </div>
                );
            })}
        </div>
    );
}
