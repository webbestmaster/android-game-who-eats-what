import {useCallback, useMemo, useState} from 'react';
import {useScreenSize} from 'react-system-hook';

import {useSingleTouch} from '../../hook/single-touch-hook/single-touch-hook';
import {SingleTouchCoordinatesType} from '../../hook/single-touch-hook/single-touch-type';
import {getRandomItem} from '../../util/array';

import gameStyle from './game.scss';
import {InteractiveBlockStateType} from './active-block/active-block-type';
import {getDefaultCoordinates, getDropPlaceData, getIsInPlace} from './game-helper';
import {meatFood} from './task/food/meat/meat';
import {OnGameEndType} from './game-type';
import {AnimalType} from './task/animal/animal-type';
import {foodList} from './task/food/food';
import {FoodType} from './task/food/food-type';

type PropsType = {
    animal: AnimalType;
    onGameEnd: OnGameEndType;
};

export function Game(props: PropsType): JSX.Element {
    const {onGameEnd, animal} = props;
    const [animalImage] = useState<string>(getRandomItem<string>(animal.imageList));
    const [food] = useState<FoodType>(getRandomItem<FoodType>(foodList));
    const {width, height} = useScreenSize();
    const minScreenSize = Math.min(width, height);
    const dishSize = Math.round(minScreenSize / 3.5);
    const halfDishSize = Math.round(dishSize / 2);
    const dropPlaceData = useMemo(() => {
        return getDropPlaceData({dishSize, screen: {height, width}});
    }, [dishSize, height, width]);
    const [attemptCount, setAttemptCount] = useState<number>(0);

    const blockList: Array<InteractiveBlockStateType> = [{blockId: 'one'}, {blockId: 'two'}, {blockId: 'three'}];

    const [activeBlockId, setActiveBlockId] = useState<string>('');

    const onTouchEnd = useCallback(
        (touchEndCoordinates: SingleTouchCoordinatesType) => {
            const isInDropPlace = getIsInPlace(touchEndCoordinates, {
                height: dropPlaceData.height,
                left: dropPlaceData.left,
                top: dropPlaceData.top,
                width: dropPlaceData.width,
            });

            console.log('activeBlockId', activeBlockId);

            if (isInDropPlace && activeBlockId) {
                const newAttemptCount = attemptCount + 1;

                setAttemptCount(newAttemptCount);

                if (activeBlockId === 'two') {
                    onGameEnd({attemptCount: newAttemptCount});
                }
            }

            setActiveBlockId('');
        },
        [dropPlaceData, onGameEnd, activeBlockId, attemptCount]
    );

    const singleTouchArgument = useMemo(() => {
        return {id: 'game', onTouchEnd};
    }, [onTouchEnd]);

    const {coordinates, isPressed} = useSingleTouch(singleTouchArgument);

    return (
        <div className={gameStyle.game}>
            {blockList.map((block: InteractiveBlockStateType, index: number): JSX.Element => {
                const {blockId} = block;
                const defaultCoordinates = getDefaultCoordinates({dishSize, height, index, width});

                return (
                    <div
                        className={gameStyle.plate}
                        key={'plate-' + blockId}
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
                        console.log('///// play audio');
                    }}
                    style={dropPlaceData}
                    type="button"
                >
                    <img alt={animal.id} className={gameStyle.drop_place_image} src={animalImage} />
                </button>
            </div>

            {blockList.map((block: InteractiveBlockStateType, index: number): JSX.Element => {
                const {blockId} = block;
                const isActiveBlock: boolean = blockId === activeBlockId && isPressed;
                const transformCoordinates: SingleTouchCoordinatesType = isActiveBlock
                    ? coordinates
                    : getDefaultCoordinates({dishSize, height, index, width});

                const translateX = transformCoordinates.pageX - halfDishSize;
                const translateY = transformCoordinates.pageY - halfDishSize;

                const transform = `translate3d(${translateX}px,${translateY}px,0px)`;

                return (
                    <div
                        className={gameStyle.action_block}
                        key={'food-' + blockId}
                        onTouchStart={() => setActiveBlockId(blockId)}
                        style={{
                            height: dishSize,
                            transform,
                            width: dishSize,
                            zIndex: isActiveBlock ? 3 : 2,
                        }}
                    >
                        <img
                            alt={meatFood.id}
                            className={gameStyle.action_block__image}
                            src={getRandomItem<string>(meatFood.imageList)}
                        />
                    </div>
                );
            })}
        </div>
    );
}
