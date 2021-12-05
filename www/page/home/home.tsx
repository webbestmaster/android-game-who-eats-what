/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, unicorn/consistent-function-scoping, func-style */

import {useAudioPlayer} from '../../hook/audio-player-hook/audio-player-hook';
import {ambientAudioList} from '../../audio/ambient/ambient';

import homeStyle from './home.scss';

export function Home(): JSX.Element {
    const ignoredAudioPlayer = useAudioPlayer({
        audioId: 'ambient',
        isLoop: true,
        isPlaying: true,
        isShuffle: true,
        trackList: ambientAudioList,
    });

    const onClickEvent = () => {
        // eslint-disable-next-line no-undef, no-alert
        alert('333322');
    };

    return (
        <div className={homeStyle.home} onClick={onClickEvent}>
            home
        </div>
    );
}
