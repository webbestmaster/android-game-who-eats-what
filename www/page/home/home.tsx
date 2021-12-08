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

    const singleTouch = useSingleTouch();

    return (
        <div className={homeStyle.home}>
            <pre>
                {JSON.stringify(singleTouch, null, 2)}
            </pre>
            <div>home</div>
            <button onClick={evt => console.log(evt)} type="button">
                button
            </button>
            <div>home</div>
        </div>
    );
}
