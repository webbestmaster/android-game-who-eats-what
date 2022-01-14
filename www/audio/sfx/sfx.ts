import gameEnd from './file/game-end.mp3';
import femaleNope from './file/female-hum-nope.mp3';
import cartoonNope from './file/cartoon-hum-nope.mp3';

export const sfxAudioMap = {
    badAction: [femaleNope, cartoonNope],
    gameEnd,
} as const;
