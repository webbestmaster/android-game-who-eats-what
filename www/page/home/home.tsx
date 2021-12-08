import {useState} from 'react';

import {useAudioPlayer} from '../../hook/audio-player-hook/audio-player-hook';
// import {ambientAudioList} from '../../audio/ambient/ambient';

import {sfxAudioList} from '../../audio/sfx/sfx';
import {useSingleTouch} from '../../hook/single-touch-hook/single-touch-hook';

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

    const [activeBlockId, setActiveBlockId] = useState<string>('');

    const singleTouch = useSingleTouch();
    const {coordinates} = singleTouch;
    const {pageX, pageY} = coordinates;

    return (
        <div className={homeStyle.home}>
            <div className={homeStyle.action_wrapper}>
                <div
                    className={homeStyle.action_block}
                    onTouchStart={() => setActiveBlockId('1')}
                    style={{transform: `translate3d(${pageX}px,${pageY}px,0px)`}}
                >
                    1
                </div>
                <div
                    className={homeStyle.action_block}
                    onTouchStart={() => setActiveBlockId('2')}
                    style={{transform: `translate3d(${pageX}px,${pageY}px,0px)`}}
                >
                    2
                </div>
                <div
                    className={homeStyle.action_block}
                    onTouchStart={() => setActiveBlockId('3')}
                    style={{transform: `translate3d(${pageX}px,${pageY}px,0px)`}}
                >
                    3
                </div>
            </div>

            <div>{JSON.stringify(singleTouch, null, 2)}</div>
            <div>home</div>
            <button onClick={evt => console.log(evt)} type="button">
                button
            </button>
            <div>home</div>
        </div>
    );
}
