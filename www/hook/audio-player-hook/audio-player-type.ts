export type AudioPlayerConfigType = {
    audioId: string;
    isLoop: boolean;
    isMuted: boolean;
    isPlaying: boolean;
    isShuffle: boolean;
    trackList: Array<string>;
    volume: number;
};

export type AudioPlayerType = {
    isPlaying: boolean;
    pause: () => void;
    play: () => void;
    setIsMuted: (isMuted: boolean) => void;
    setVolume: (volume: number) => void;
    stop: () => void;
};
