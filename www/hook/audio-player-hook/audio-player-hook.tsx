/* global setTimeout */

import {useEffect, useMemo, useState} from 'react';

import {getRandomNumber} from '../../util/number';
import {getNextArrayLoopIndex} from '../../util/array';

import {AudioPlayerConfigType, AudioPlayerType} from './audio-player-type';
import {getAudioById} from './audio-player-const';

export function useAudioPlayer(config: AudioPlayerConfigType): AudioPlayerType {
    const {isPlaying, isShuffle, list, isLoop, audioId} = config;
    const [audioIndex, setAudioIndex] = useState<number>(isShuffle ? getRandomNumber(0, list.length) : 0);
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        const audio = getAudioById(audioId);

        audio.pause();
        audio.currentTime = 0;

        if (!isPlaying) {
            return;
        }

        // eslint-disable-next-line complexity
        function onAudioEnded() {
            audio.removeEventListener('ended', onAudioEnded, false);

            const nextIndex = isShuffle ? getRandomNumber(0, list.length) : getNextArrayLoopIndex(list, audioIndex);

            const isShouldPlayNext = isShuffle || isLoop || nextIndex !== 0;

            if (!isShouldPlayNext) {
                return;
            }

            setAudioIndex(nextIndex);

            if (nextIndex === audioIndex) {
                setCounter(counter + 1);
            }
        }

        audio.addEventListener('ended', onAudioEnded, false);

        function onError(audioPlayError: Error): void {
            console.log('[useAudioPlayer]: can not play audio', list[audioIndex]);
            console.log(audioPlayError);

            audio
                .play()
                .then((): void => console.log('[useAudioPlayer]: play', list[audioIndex]))
                .catch((setTimeoutError: Error) => {
                    setTimeout((): void => onError(setTimeoutError), 1e3);
                });
        }

        audio.src = list[audioIndex];

        audio
            .play()
            .then((): void => console.log('[useAudioPlayer]: play', list[audioIndex]))
            .catch(onError);
    }, [audioIndex, audioId, isLoop, isPlaying, isShuffle, list, counter]);

    return useMemo<AudioPlayerType>((): AudioPlayerType => {
        return {
            getCurrentAudio: () => getAudioById(audioId),
        };
    }, [audioId]);
}
