import {useCallback, useState} from 'react';

import {Game} from '../../component/game/game';
import {useAudioPlayer} from '../../hook/audio-player-hook/audio-player-hook';
import {ambientAudioList} from '../../audio/ambient/ambient';
import {AnimalType} from '../../component/game/task/animal/animal-type';
import {animalList} from '../../component/game/task/animal/animal';
import {getRandomItem} from '../../util/array';
import {GameEndResultType, OnGameEndType} from '../../component/game/game-type';
import {Popup} from '../../layout/popup/popup';
import {EndGame} from '../../component/end-game/end-game';
import {MedalList} from '../../component/medal-list/medal-list';
import {playAudio} from '../../hook/audio-player-hook/audio-player-helper';

import {sfxAudioMap} from '../../audio/sfx/sfx';

import homeStyle from './home.scss';

export function Home(): JSX.Element {
    const ignoredAudioPlayer = useAudioPlayer({
        audioId: 'ambient',
        isLoop: true,
        isMuted: false,
        isPlaying: true,
        isShuffle: true,
        trackList: ambientAudioList,
        volume: 0.3,
    });

    const maxGameCount = 3;
    const [isEndGamePopupOpen, setIsEndGamePopupOpen] = useState<boolean>(false);
    const [gameResultList, setGameResultList] = useState<Array<GameEndResultType>>([]);
    const [animal, setAnimal] = useState<AnimalType>(getRandomItem<AnimalType>(animalList));

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
        setGameResultList([]);
        setNewRandomAnimal();
    }, [setNewRandomAnimal]);

    const onGameEnd: OnGameEndType = useCallback(
        (gameResult: GameEndResultType) => {
            const newGameResultList = [...gameResultList, gameResult];

            setGameResultList(newGameResultList);

            const isFullGameEnd = newGameResultList.length >= maxGameCount;

            if (isFullGameEnd) {
                playAudio({
                    audioId: 'end-game',
                    isMuted: false,
                    src: sfxAudioMap.gameEnd,
                    volume: 1,
                });

                setIsEndGamePopupOpen(true);
                console.log('all games is end');
                return;
            }

            setNewRandomAnimal();

            console.log('game is end');
        },
        [gameResultList, setNewRandomAnimal]
    );

    return (
        <div className={homeStyle.home}>
            <Game animal={animal} key={JSON.stringify(animal)} onGameEnd={onGameEnd} />
            <MedalList gameResultList={gameResultList} />
            <Popup closePopup={resetView} hasCloseButton isOpen={isEndGamePopupOpen}>
                {isEndGamePopupOpen ? <EndGame gameResultList={gameResultList} handleNewGame={resetView} /> : null}
            </Popup>
        </div>
    );
}
