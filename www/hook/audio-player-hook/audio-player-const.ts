/* global Audio, HTMLAudioElement */

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
