/*
export enum GameFlowEnum {
    changeTask = 'change-task',
    endGame = 'end-game',
    feedAvailable = 'feed-available',
    showTask = 'show-task', // use change task, try to remove
}

export enum GameMedalEnum {
    bronze = 'bronze',
    empty = 'empty',
    gold = 'gold',
    silver = 'silver',
}
*/

export type GameEndResultType = {
    attemptCount: number;
};

export type OnGameEndType = (result: GameEndResultType) => void;
