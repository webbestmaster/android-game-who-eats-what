export type AnswerResultType = {
    attemptCount: number;
};

export type OnAnswerType = (result: AnswerResultType) => void;

export type ArrayTrioType<ItemType> = [ItemType, ItemType, ItemType];

export type FoodImageType = {
    isReversed: boolean;
    src: string;
};
