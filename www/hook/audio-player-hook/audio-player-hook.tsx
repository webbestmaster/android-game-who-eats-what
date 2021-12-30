/* global setTimeout */

import {useCallback, useEffect, useMemo, useState} from 'react';
import {useDocumentVisibility} from 'react-system-hook';

import {getRandomNumber} from '../../util/number';
import {getNextArrayLoopIndex} from '../../util/array';

import {AudioPlayerConfigType, AudioPlayerType} from './audio-player-type';
import {getAudioById, playAudio, PlayAudioArgumentType} from './audio-player-helper';

// eslint-disable-next-line sonarjs/cognitive-complexity
export function useAudioPlayer(config: AudioPlayerConfigType): AudioPlayerType {
    const {
        isPlaying: isPlayingInitial,
        isShuffle: isShuffleInitial,
        trackList: trackListInitial,
        isLoop: isLoopInitial,
        audioId: audioIdInitial,
        volume: audioVolumeInitial,
        isMuted: audioIsMutedInitial,
    } = config;
    const [isPlaying] = useState<boolean>(isPlayingInitial);
    const [isShuffle] = useState<boolean>(isShuffleInitial);
    const [trackList] = useState<Array<string>>(trackListInitial);
    const [isLoop] = useState<boolean>(isLoopInitial);
    const [audioId] = useState<string>(audioIdInitial);
    const [audioIndex, setAudioIndex] = useState<number>(isShuffleInitial ? getRandomNumber(0, trackList.length) : 0);
    const [counter, setCounter] = useState<number>(0);
    const [volume, setVolume] = useState<number>(audioVolumeInitial);
    const [isMuted, setIsMuted] = useState<boolean>(audioIsMutedInitial);
    const isDocumentVisible = useDocumentVisibility();

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
        getAudioById(audioId).volume = volume;
    }, [audioId, volume]);

    useEffect(() => {
        if (!isPlaying) {
            return;
        }

        const audio = getAudioById(audioId);

        const playAudioData: PlayAudioArgumentType = {audioId, isMuted, src, volume};

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
            .catch((playAudioError: unknown) => {
                console.log(`[ERROR] [useAudioPlayer]: can not play audio: ${src}`);
                console.log(`[ERROR] [useAudioPlayer]: ${playAudioError}`);
                setTimeout((): void => setCounter(counter + 1), 1e3);
            });
    }, [audioId, counter, isPlaying, onAudioEnded, src, volume, isMuted]);

    useEffect(() => {
        console.log('/// begin - currentAudio = getAudioById');

        return () => {
            console.log('/// end - currentAudio = getAudioById');

            const currentAudio = getAudioById(audioId);

            try {
                currentAudio.pause();
            } catch (pauseError: unknown) {
                console.log(pauseError);
            }

            try {
                currentAudio.currentTime = 0;
            } catch (currentTimeError: unknown) {
                console.log(currentTimeError);
            }
        };
    }, [audioId]);

    useEffect(() => {
        const currentAudio = getAudioById(audioId);

        try {
            currentAudio.muted = !isDocumentVisible || isMuted;
        } catch (volumeError: unknown) {
            console.log(volumeError);
        }
    }, [isDocumentVisible, audioId, isMuted]);

    return useMemo<AudioPlayerType>((): AudioPlayerType => {
        return {setIsMuted, setVolume};
    }, []);
}
