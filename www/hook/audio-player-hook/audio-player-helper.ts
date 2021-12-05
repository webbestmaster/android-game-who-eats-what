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
    audioId: string;
    src: string;
};

export function playAudio(playAudioData: PlayAudioArgumentType): Promise<unknown> {
    const {audioId, src} = playAudioData;
    const audio = getAudioById(audioId);

    audio.src = '';

    return new Promise((resolve: PromiseResolveType<void>, reject: PromiseResolveType<void>) => {
        audio.src = src;

        // eslint-disable-next-line unicorn/prefer-add-event-listener
        audio.oncanplay = async () => {
            // eslint-disable-next-line unicorn/prefer-add-event-listener
            audio.oncanplay = null;
            // audio.playbackRate = 16;

            try {
                await audio.play();
                console.log(`[playAudio]: ${src}`);
                resolve();
                // eslint-disable-next-line unicorn/prefer-optional-catch-binding
            } catch (tryToPlayError: unknown) {
                console.log(`[ERROR] [playAudio]: ${src}`);
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
