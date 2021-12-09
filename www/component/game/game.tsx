import {useState} from 'react';

import {useAudioPlayer} from '../../hook/audio-player-hook/audio-player-hook';
import {sfxAudioList} from '../../audio/sfx/sfx';
import {useSingleTouch} from '../../hook/single-touch-hook/single-touch-hook';

import gameStyle from './game.scss';

export function Game(): JSX.Element {
    const ignoredAudioPlayer = useAudioPlayer({
        audioId: 'ambient',
        isLoop: true,
        isPlaying: true,
        isShuffle: true,
        // trackList: ambientAudioList,
        trackList: sfxAudioList,
    });

    const [activeBlockId, setActiveBlockId] = useState<string>('');

    const singleTouch = useSingleTouch();
    const {coordinates} = singleTouch;
    const {pageX, pageY} = coordinates;

    // block logics
    // 1 - save default position to "reset" block state for wrong answer

    return (
        <div className={gameStyle.game}>
            {/* just for debug */}
            <div className={gameStyle.drop_place}>mouth</div>

            <div
                className={gameStyle.action_block}
                onTouchStart={() => setActiveBlockId('1')}
                style={{transform: `translate3d(${pageX}px,${pageY}px,0px)`}}
            >
                1
            </div>
            <div
                className={gameStyle.action_block}
                onTouchStart={() => setActiveBlockId('2')}
                style={{transform: `translate3d(${pageX}px,${pageY}px,0px)`}}
            >
                2
            </div>
            <div
                className={gameStyle.action_block}
                onTouchStart={() => setActiveBlockId('3')}
                style={{transform: `translate3d(${pageX}px,${pageY}px,0px)`}}
            >
                3
            </div>
        </div>
    );
}
