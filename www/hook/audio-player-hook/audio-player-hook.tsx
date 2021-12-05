/* global setTimeout */

import {useCallback, useEffect, useMemo, useState} from 'react';

import {getRandomNumber} from '../../util/number';
import {getNextArrayLoopIndex} from '../../util/array';

import {AudioPlayerConfigType, AudioPlayerType} from './audio-player-type';
import {getAudioById, playAudio, PlayAudioArgumentType} from './audio-player-helper';

export function useAudioPlayer(config: AudioPlayerConfigType): AudioPlayerType {
    const {
        isPlaying: isPlayingInitial,
        isShuffle: isShuffleInitial,
        trackList: trackListInitial,
        isLoop: isLoopInitial,
        audioId: audioIdInitial,
    } = config;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const [isPlaying, setIsPlaying] = useState<boolean>(isPlayingInitial);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const [isShuffle, setIsShuffle] = useState<boolean>(isShuffleInitial);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const [trackList, setTrackList] = useState<Array<string>>(trackListInitial);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const [isLoop, setIsLoop] = useState<boolean>(isLoopInitial);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const [audioId, setAudioId] = useState<string>(audioIdInitial);
    const [audioIndex, setAudioIndex] = useState<number>(isShuffleInitial ? getRandomNumber(0, trackList.length) : 0);
    const [counter, setCounter] = useState<number>(0);

    const src = trackList[audioIndex];
    const trackListLength = trackList.length;

    // eslint-disable-next-line complexity
    const onAudioEnded = useCallback(() => {
        const nextIndex = isShuffle
            ? getRandomNumber(0, trackListLength)
            : getNextArrayLoopIndex(trackListLength, audioIndex);

        const isShouldPlayNext = isShuffle || isLoop || nextIndex !== 0;

        if (!isShouldPlayNext) {
            return;
        }

        setAudioIndex(nextIndex);

        if (nextIndex === audioIndex) {
            setCounter(counter + 1);
        }
    }, [isShuffle, isLoop, audioIndex, counter, trackListLength]);

    useEffect(() => {
        if (!isPlaying) {
            return;
        }

        const audio = getAudioById(audioId);

        const playAudioData: PlayAudioArgumentType = {audioId, src};

        playAudio(playAudioData)
            .then(() => {
                console.log(`[useAudioPlayer]: play - ${src}`);

                // eslint-disable-next-line unicorn/prefer-add-event-listener
                audio.onended = () => {
                    // eslint-disable-next-line unicorn/prefer-add-event-listener
                    audio.onended = null;
                    onAudioEnded();
                };
            })
            .catch((playAudioError: Error) => {
                console.log(`[ERROR] [useAudioPlayer]: can not play audio: ${src}`);
                console.log(`[ERROR] [useAudioPlayer]: ${playAudioError.message}`);
                setTimeout((): void => setCounter(counter + 1), 1e3);
            });
    }, [audioId, counter, isPlaying, onAudioEnded, src]);

    return useMemo<AudioPlayerType>((): AudioPlayerType => {
        return {
            getCurrentAudio: () => getAudioById(audioId),
            // play audio by src and audioId
        };
    }, [audioId]);
}
