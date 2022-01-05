/* global Audio, HTMLAudioElement */

import {PromiseResolveType} from '../../util/promise';

const audioMap: Record<string, HTMLAudioElement> = {};

export function getAudioById(audioId: string): HTMLAudioElement {
    if (audioId in audioMap) {
        return audioMap[audioId];
    }

    const audio = new Audio();

    audio.preload = 'metadata';

    audioMap[audioId] = audio;

    return audio;
}

export type PlayAudioArgumentType = {
    audioId?: string;
    isMuted?: boolean;
    src: string;
    volume?: number;
};

export function playAudio(playAudioData: PlayAudioArgumentType): Promise<unknown> {
    const {src} = playAudioData;
    const {audioId = src, volume = 1, isMuted = false} = playAudioData;
    const audio = getAudioById(audioId);

    return new Promise((resolve: PromiseResolveType<void>, reject: PromiseResolveType<void>) => {
        if (!String(audio.src).includes(src)) {
            audio.src = src;
        }

        // eslint-disable-next-line unicorn/prefer-add-event-listener
        audio.onended = () => {
            audio.src = '';
            // eslint-disable-next-line unicorn/prefer-add-event-listener
            audio.oncanplay = null;
            audio.currentTime = 0;
        };

        // eslint-disable-next-line unicorn/prefer-add-event-listener
        audio.oncanplay = async () => {
            // eslint-disable-next-line unicorn/prefer-add-event-listener
            audio.oncanplay = null;
            // audio.playbackRate = 16;

            try {
                audio.muted = isMuted;
                audio.volume = volume;
                await audio.play();
                console.log(`[playAudio]: ${src}`);
                resolve();
                // eslint-disable-next-line unicorn/prefer-optional-catch-binding
            } catch (tryToPlayError: unknown) {
                console.log(`[ERROR] [playAudio]: ${src}`);
                console.log(tryToPlayError);
                reject();
            }
        };

        // eslint-disable-next-line unicorn/prefer-add-event-listener
        audio.onerror = () => {
            // eslint-disable-next-line unicorn/prefer-add-event-listener
            audio.oncanplay = null;
            reject();
        };
    });
}
