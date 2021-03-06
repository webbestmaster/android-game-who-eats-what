import {useCallback, useEffect, useState} from 'react';

import {Game} from '../../component/game/game';
import {useAudioPlayer} from '../../hook/audio-player-hook/audio-player-hook';
import {ambientAudioList} from '../../audio/ambient/ambient';
import {AnimalType} from '../../component/game/task/animal/animal-type';
import {animalList} from '../../component/game/task/animal/animal';
import {getRandomItem, getRandomNewItem} from '../../util/array';
import {AnswerResultType, OnAnswerType} from '../../component/game/game-type';
import {Popup} from '../../layout/popup/popup';
import {EndGame} from '../../component/end-game/end-game';
import {MedalList} from '../../component/medal-list/medal-list';
import {playAudio} from '../../hook/audio-player-hook/audio-player-helper';
import {sfxAudioMap} from '../../audio/sfx/sfx';
import {showInterstitialAd} from '../../util/ads';
import {GameHud} from '../../component/game/game-hud/game-hud';
import {IsRender} from '../../layout/is-render/is-render';
import {getFromLocalStorage, setToLocalStorage} from '../../util/local-storage';
import {settingIsAmbientEnabled, settingIsSfxEnabled} from '../../component/game/game-const';
import {EnableDisableEnum} from '../../util/type';
import {backgroundList} from '../../component/game/ui/background';
import {useIsAppActive} from '../../util/android-web-view';

import homeStyle from './home.scss';

export function Home(): JSX.Element {
    const maxGameCount = 10;
    const [isEndGamePopupOpen, setIsEndGamePopupOpen] = useState<boolean>(false);
    const [answerResultList, setAnswerResultList] = useState<Array<AnswerResultType>>([]);
    const [animal, setAnimal] = useState<AnimalType>(getRandomItem<AnimalType>(animalList));
    const [isAmbientEnabled, setIsAmbientEnabled] = useState<boolean>(
        getFromLocalStorage(settingIsAmbientEnabled) !== EnableDisableEnum.disable // default: true
    );
    const [background, setBackground] = useState<string>(getRandomItem<string>(backgroundList));
    const [isSfxEnabled, setIsSfxEnabled] = useState<boolean>(
        getFromLocalStorage(settingIsSfxEnabled) !== EnableDisableEnum.disable // default: true
    );

    const isAppActive = useIsAppActive();

    const {play, pause} = useAudioPlayer({
        audioId: 'ambient',
        isLoop: true,
        isMuted: false,
        isPlaying: isAmbientEnabled,
        isShuffle: true,
        trackList: ambientAudioList,
        volume: 0.3,
    });

    useEffect(() => {
        setToLocalStorage(
            settingIsAmbientEnabled,
            isAmbientEnabled ? EnableDisableEnum.enable : EnableDisableEnum.disable
        );
        setToLocalStorage(settingIsSfxEnabled, isSfxEnabled ? EnableDisableEnum.enable : EnableDisableEnum.disable);
    }, [isAmbientEnabled, isSfxEnabled]);

    useEffect(() => {
        if (isAppActive && isAmbientEnabled) {
            play();
        } else {
            pause();
        }
    }, [isAmbientEnabled, isAppActive, play, pause]);

    const setNewRandomAnimal = useCallback(() => {
        setAnimal(getRandomNewItem<AnimalType>(animalList, [animal]));

        if (answerResultList.length === 4) {
            setBackground(getRandomNewItem<string>(backgroundList, [background]));
        }
    }, [animal, answerResultList, background]);

    const resetView = useCallback(() => {
        setIsEndGamePopupOpen(false);
        setAnswerResultList([]);
        setNewRandomAnimal();
        setBackground(getRandomNewItem<string>(backgroundList, [background]));
        showInterstitialAd();
    }, [setNewRandomAnimal, background]);

    const onGoodAnswer: OnAnswerType = useCallback(
        (answerResult: AnswerResultType) => {
            const newAnswerResultList = [...answerResultList, answerResult];

            setAnswerResultList(newAnswerResultList);

            const isFullGameEnd = newAnswerResultList.length >= maxGameCount;

            if (isFullGameEnd) {
                playAudio({isMuted: !isSfxEnabled, src: sfxAudioMap.gameEnd});

                setIsEndGamePopupOpen(true);
                console.log('all games is end');
                return;
            }

            playAudio({
                audioId: animal.id,
                isMuted: !isSfxEnabled,
                onEnded: setNewRandomAnimal, // onEnded not works on old android
                src: getRandomItem<string>(animal.soundList),
            });

            console.log('game is end');
        },
        [animal, answerResultList, setNewRandomAnimal, isSfxEnabled]
    );

    const onWrongAnswer: OnAnswerType = useCallback(() => {
        playAudio({isMuted: !isSfxEnabled, src: getRandomItem<string>(sfxAudioMap.badAction)});
    }, [isSfxEnabled]);

    return (
        <div className={homeStyle.home} style={{backgroundImage: `url(${background})`}}>
            <IsRender isRender={!isEndGamePopupOpen}>
                <GameHud
                    isAmbientEnabled={isAmbientEnabled}
                    isSfxEnabled={isSfxEnabled}
                    setIsAmbientEnabled={setIsAmbientEnabled}
                    setIsSfxEnabled={setIsSfxEnabled}
                />
            </IsRender>
            <Game
                animal={animal}
                isSfxEnabled={isSfxEnabled}
                key={JSON.stringify(animal)}
                onGoodAnswer={onGoodAnswer}
                onWrongAnswer={onWrongAnswer}
            />
            <MedalList answerResultList={answerResultList} />
            <Popup closePopup={resetView} hasCloseButton={false} isOpen={isEndGamePopupOpen}>
                {isEndGamePopupOpen ? <EndGame answerResultList={answerResultList} handleNewGame={resetView} /> : null}
            </Popup>
        </div>
    );
}
