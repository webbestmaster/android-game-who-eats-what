import {useCallback, useEffect, useMemo, useState} from 'react';
// import {useDocumentVisibility} from 'react-system-hook';

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
    const [isPlaying, setIsPlaying] = useState<boolean>(isPlayingInitial);
    const [isShuffle] = useState<boolean>(isShuffleInitial);
    const [trackList] = useState<Array<string>>(
        trackListInitial.length === 1 ? [...trackListInitial, ...trackListInitial] : trackListInitial
    );
    const [isLoop] = useState<boolean>(isLoopInitial);
    const [audioId] = useState<string>(audioIdInitial);
    const [audioIndex, setAudioIndex] = useState<number>(isShuffleInitial ? getRandomNumber(0, trackList.length) : 0);
    const [volume, setVolume] = useState<number>(audioVolumeInitial);
    const [isMuted, setIsMuted] = useState<boolean>(audioIsMutedInitial);
    // const isDocumentVisible = useDocumentVisibility();

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

        setAudioIndex((currentIndex: number) => {
            return currentIndex === nextIndex ? getNextArrayLoopIndex(trackListLength, audioIndex + 1) : nextIndex;
        });
    }, [isShuffle, isLoop, audioIndex, trackListLength]);

    useEffect(() => {
        getAudioById(audioId).volume = volume;
    }, [audioId, volume]);

    useEffect(() => {
        if (!isPlaying) {
            return;
        }

        const src = trackList[audioIndex];

        const playAudioData: PlayAudioArgumentType = {
            audioId,
            // isMuted: !isDocumentVisible || isMuted,
            isMuted,
            onEnded: onAudioEnded,
            src,
            volume,
        };

        playAudio(playAudioData)
            .then(() => {
                console.log(`[useAudioPlayer]: play - ${src}`);
            })
            .catch((playAudioError: unknown) => {
                console.log(`[ERROR] [useAudioPlayer]: can not play audio: ${src}`);
                console.log(`[ERROR] [useAudioPlayer]: ${playAudioError}`);

                onAudioEnded();
            });
    }, [audioId, isPlaying, onAudioEnded, trackList, audioIndex, volume, isMuted]);

    /*
    useEffect(() => {
        console.log('/// begin - currentAudio = getAudioById');

        return () => {
            console.log('/// end - currentAudio = getAudioById');

            const currentAudio = getAudioById(audioId);

            try {
                setIsPlaying(false);
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
*/

    /*
    useEffect(() => {
        const currentAudio = getAudioById(audioId);

        try {
            currentAudio.muted = !isDocumentVisible || isMuted;
        } catch (volumeError: unknown) {
            console.log(volumeError);
        }
    }, [isDocumentVisible, audioId, isMuted]);
*/

    const stopAudioInHook = useCallback(() => {
        const currentAudio = getAudioById(audioId);

        try {
            setIsPlaying(false);
            currentAudio.pause();
            currentAudio.currentTime = 0;
        } catch (stopError: unknown) {
            console.log(stopError);
        }
    }, [audioId]);

    const pauseAudioInHook = useCallback(() => {
        const currentAudio = getAudioById(audioId);

        try {
            setIsPlaying(false);
            currentAudio.pause();
        } catch (pauseError: unknown) {
            console.log(pauseError);
        }
    }, [audioId]);

    const playAudioInHook = useCallback(async () => {
        const currentAudio = getAudioById(audioId);

        try {
            setIsPlaying(true);
            await currentAudio.play();
            // currentAudio.currentTime = 0;
        } catch (playError: unknown) {
            console.log(playError);
        }
    }, [audioId]);

    return useMemo<AudioPlayerType>((): AudioPlayerType => {
        return {
            isPlaying,
            pause: pauseAudioInHook,
            play: playAudioInHook,
            setIsMuted,
            setVolume,
            stop: stopAudioInHook,
        };
    }, [playAudioInHook, stopAudioInHook, pauseAudioInHook, isPlaying]);
}
