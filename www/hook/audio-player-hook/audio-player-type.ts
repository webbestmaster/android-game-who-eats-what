/* global HTMLAudioElement */

export type AudioPlayerConfigType = {
    audioId: string;
    isLoop: boolean;
    isPlaying: boolean;
    isShuffle: boolean;
    trackList: Array<string>;
};

/*
export enum AudioPlayerStateEnum {
    playing = 'playing',
    paused = 'paused',
}
*/

export type AudioPlayerType = {
    getCurrentAudio: () => HTMLAudioElement;
    // state: AudioPlayerStateEnum,
};
