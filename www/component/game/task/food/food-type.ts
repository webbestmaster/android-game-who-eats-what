export enum FoodEnum {
    acorns = 'acorns',
    catBowlFood = 'cat bowl food',
    catCanFood = 'cat can food',
    dogBowlFood = 'dog bowl food',
    dogCanFood = 'dog can food',
    fish = 'fish',
    grain = 'grain',
    grass = 'grass',
    honeyComb = 'honey comb',
    meat = 'meat',
    mouse = 'mouse',
    rabbit = 'rabbit',
}

export type FoodType = {
    id: FoodEnum;
    imageList: Array<string>;
};
