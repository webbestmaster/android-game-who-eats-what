/* global Audio, HTMLAudioElement, Event */

import {PromiseResolveType} from '../../util/promise';
import {noop} from '../../util/function';

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
    onEnded?: () => void;
    src: string;
    volume?: number;
};

export function playAudio(playAudioData: PlayAudioArgumentType): Promise<unknown> {
    const {src} = playAudioData;
    const {audioId = src, volume = 1, isMuted = false, onEnded = noop} = playAudioData;
    const audio = getAudioById(audioId);

    return new Promise((resolve: PromiseResolveType<void>, reject: PromiseResolveType<Error>) => {
        if (!String(audio.src).includes(src)) {
            audio.src = src;
        }

        // eslint-disable-next-line unicorn/prefer-add-event-listener
        audio.onended = () => {
            console.log(`[playAudio] [onended]: ${src}, ${audioId}`);

            // eslint-disable-next-line unicorn/prefer-add-event-listener, no-param-reassign
            audio.onended = null;

            audio.src = '';
            audio.currentTime = 0;

            onEnded();
        };

        // eslint-disable-next-line unicorn/prefer-add-event-listener
        audio.oncanplay = async () => {
            console.log(`[playAudio] [oncanplay]: ${src}, ${audioId}`);

            // eslint-disable-next-line unicorn/prefer-add-event-listener, no-param-reassign
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
                reject(new Error(String(tryToPlayError)));
            }
        };

        // eslint-disable-next-line unicorn/prefer-add-event-listener
        audio.onerror = (errorEvent: Event | string) => {
            console.log(`[playAudio] [onerror]: ${src}, ${audioId}`);

            // eslint-disable-next-line unicorn/prefer-add-event-listener, no-param-reassign
            audio.onerror = null;

            reject(new Error(String(errorEvent)));
        };
    });
}
