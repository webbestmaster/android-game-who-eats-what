import {useCallback, useEffect, useState} from 'react';
import {useDocumentVisibility} from 'react-system-hook';

import {Game} from '../../component/game/game';
import {useAudioPlayer} from '../../hook/audio-player-hook/audio-player-hook';
import {ambientAudioList} from '../../audio/ambient/ambient';
import {AnimalType} from '../../component/game/task/animal/animal-type';
import {animalList} from '../../component/game/task/animal/animal';
import {getRandomItem} from '../../util/array';
import {AnswerResultType, OnAnswerType} from '../../component/game/game-type';
import {Popup} from '../../layout/popup/popup';
import {EndGame} from '../../component/end-game/end-game';
import {MedalList} from '../../component/medal-list/medal-list';
import {playAudio} from '../../hook/audio-player-hook/audio-player-helper';
import {sfxAudioMap} from '../../audio/sfx/sfx';
import {showInterstitialAd} from '../../util/ads';

import homeStyle from './home.scss';

export function Home(): JSX.Element {
    const {play, pause} = useAudioPlayer({
        audioId: 'ambient',
        isLoop: true,
        isMuted: false,
        isPlaying: true,
        isShuffle: true,
        trackList: ambientAudioList,
        volume: 0.3,
    });

    const maxGameCount = 10;
    const [isEndGamePopupOpen, setIsEndGamePopupOpen] = useState<boolean>(false);
    const [answerResultList, setAnswerResultList] = useState<Array<AnswerResultType>>([]);
    const [animal, setAnimal] = useState<AnimalType>(getRandomItem<AnimalType>(animalList));
    const isDocumentVisible = useDocumentVisibility();

    useEffect(() => {
        if (isDocumentVisible) {
            play();
        } else {
            pause();
        }
    }, [isDocumentVisible, play, pause]);

    const setNewRandomAnimal = useCallback(() => {
        let newAnimal: AnimalType = getRandomItem<AnimalType>(animalList);

        // eslint-disable-next-line no-loops/no-loops
        while (newAnimal === animal) {
            newAnimal = getRandomItem<AnimalType>(animalList);
        }

        setAnimal(newAnimal);
    }, [animal]);

    const resetView = useCallback(() => {
        setIsEndGamePopupOpen(false);
        setAnswerResultList([]);
        setNewRandomAnimal();
        showInterstitialAd();
    }, [setNewRandomAnimal]);

    const onGoodAnswer: OnAnswerType = useCallback(
        (answerResult: AnswerResultType) => {
            const newAnswerResultList = [...answerResultList, answerResult];

            setAnswerResultList(newAnswerResultList);

            const isFullGameEnd = newAnswerResultList.length >= maxGameCount;

            if (isFullGameEnd) {
                playAudio({src: sfxAudioMap.gameEnd});

                setIsEndGamePopupOpen(true);
                console.log('all games is end');
                return;
            }

            playAudio({src: sfxAudioMap.goodBell});

            setNewRandomAnimal();

            console.log('game is end');
        },
        [answerResultList, setNewRandomAnimal]
    );

    const onWrongAnswer: OnAnswerType = useCallback(() => {
        playAudio({src: sfxAudioMap.badBell});
    }, []);

    return (
        <div className={homeStyle.home}>
            <Game
                animal={animal}
                key={JSON.stringify(animal)}
                onGoodAnswer={onGoodAnswer}
                onWrongAnswer={onWrongAnswer}
            />
            <MedalList answerResultList={answerResultList} />
            <Popup closePopup={resetView} hasCloseButton isOpen={isEndGamePopupOpen}>
                {isEndGamePopupOpen ? <EndGame answerResultList={answerResultList} handleNewGame={resetView} /> : null}
            </Popup>
        </div>
    );
}
