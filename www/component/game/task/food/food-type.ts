export enum FoodEnum {
    catBowlFood = 'cat bowl food',
    catCanFood = 'cat can food',
    dogBowlFood = 'dog bowl food',
    dogCanFood = 'dog can food',
    meat = 'meat',
}

export type FoodType = {
    id: FoodEnum;
    imageList: Array<string>;
};
