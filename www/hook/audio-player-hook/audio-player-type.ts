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
    setIsMuted: (isMuted: boolean) => void;
    setVolume: (volume: number) => void;
};
