export type GameResultType = {
    attemptCount: number;
};

export type OnAnswerType = (result: GameResultType) => void;

export type ArrayTrioType<ItemType> = [ItemType, ItemType, ItemType];

export type FoodImageType = {
    isReversed: boolean;
    src: string;
};
