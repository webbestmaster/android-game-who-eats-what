import {useAudioPlayer} from '../../hook/audio-player-hook/audio-player-hook';
import {ambientAudioList} from '../../audio/ambient/ambient';

import homeStyle from './home.scss';

export function Home(): JSX.Element {
    const ignoredAudioPlayer = useAudioPlayer({
        audioId: 'ambient',
        isLoop: true,
        isPlaying: true,
        isShuffle: true,
        list: ambientAudioList,
    });

    return <div className={homeStyle.home}>home</div>;
}
