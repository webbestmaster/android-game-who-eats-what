import {useCallback, useState} from 'react';

import {Game} from '../../component/game/game';
import {useAudioPlayer} from '../../hook/audio-player-hook/audio-player-hook';
import {sfxAudioList} from '../../audio/sfx/sfx';
import {TaskType} from '../../component/game/task/task-type';
import {taskList} from '../../component/game/task/taks';
import {getRandomItem} from '../../util/array';
import {GameEndResultType, OnGameEndType} from '../../component/game/game-type';
import {Popup} from '../../layout/popup/popup';

import homeStyle from './home.scss';

export function Home(): JSX.Element {
    const ignoredAudioPlayer = useAudioPlayer({
        audioId: 'ambient',
        isLoop: true,
        isPlaying: true,
        isShuffle: true,
        // trackList: ambientAudioList,
        trackList: sfxAudioList,
    });

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [gameResultList, setGameResultList] = useState<Array<GameEndResultType>>([]);
    const [task, setTask] = useState<TaskType>(getRandomItem<TaskType>(taskList));

    const onGameEnd: OnGameEndType = useCallback(
        (gameResult: GameEndResultType) => {
            let newTask: TaskType = getRandomItem<TaskType>(taskList);

            // eslint-disable-next-line no-loops/no-loops
            while (newTask === task) {
                newTask = getRandomItem<TaskType>(taskList);
            }

            setGameResultList([...gameResultList, gameResult]);
            setTask(newTask);

            console.log('game is end');
        },
        [task, gameResultList]
    );

    return (
        <div className={homeStyle.home}>
            <Game key={gameResultList.length} onGameEnd={onGameEnd} task={task} />
            <Popup closePopup={() => setIsOpen(false)} hasCloseButton isOpen={isOpen}>
                <h1>471908374fsfkjhef</h1>
                <h1>471908374fsfkjhef</h1>
                <h1>471908374fsfkjhef</h1>
                <h1>471908374fsfkjhef</h1>
                <h1>471908374fsfkjhef</h1>
            </Popup>
        </div>
    );
}
