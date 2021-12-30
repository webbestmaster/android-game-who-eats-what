export enum FoodEnum {
    acorns = 'acorns',
    blueberry = 'blueberry',
    carrot = 'carrot',
    catBowlFood = 'cat bowl food',
    catCanFood = 'cat can food',
    cheese = 'cheese',
    dogBowlFood = 'dog bowl food',
    dogCanFood = 'dog can food',
    fish = 'fish',
    fly = 'fly',
    frog = 'frog',
    grain = 'grain',
    grass = 'grass',
    honeyComb = 'honey comb',
    meat = 'meat',
    mosquito = 'mosquito',
    mouse = 'mouse',
    nuts = 'nuts',
    rabbit = 'rabbit',
    turnip = 'turnip',
    worm = 'worm',
}

export type FoodType = {
    id: FoodEnum;
    imageList: Array<string>;
};
