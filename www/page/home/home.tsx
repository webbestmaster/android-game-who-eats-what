import {useCallback, useState} from 'react';

import {Game} from '../../component/game/game';
import {useAudioPlayer} from '../../hook/audio-player-hook/audio-player-hook';
import {sfxAudioList} from '../../audio/sfx/sfx';

import {TaskType} from '../../component/game/task/task-type';
import {taskList} from '../../component/game/task/taks';
import {getRandomItem} from '../../util/array';

import {OnGameEndResultType, OnGameEndType} from '../../component/game/game-type';

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

    const [task, setTask] = useState<TaskType>(getRandomItem<TaskType>(taskList));
    const onGameEnd: OnGameEndType = useCallback(
        (result: OnGameEndResultType) => {
            let newTask: TaskType = getRandomItem<TaskType>(taskList);

            // eslint-disable-next-line no-loops/no-loops
            while (newTask === task) {
                newTask = getRandomItem<TaskType>(taskList);
            }

            setTask(newTask);
            console.log('game is end');
        },
        [task]
    );

    return (
        <div className={homeStyle.home}>
            <Game key={task.id} onGameEnd={onGameEnd} task={task} />
        </div>
    );
}
