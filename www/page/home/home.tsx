import {Game} from '../../component/game/game';
import {useAudioPlayer} from '../../hook/audio-player-hook/audio-player-hook';
import {sfxAudioList} from '../../audio/sfx/sfx';

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

    return (
        <div className={homeStyle.home}>
            <Game />
        </div>
    );
}
