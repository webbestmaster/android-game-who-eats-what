import {FoodEnum, FoodType} from './food-type';
import {meatFood} from './meat/meat';
import {catBowlFoodFood} from './cat-bowl-food/cat-bowl-food';
import {catCanFoodFood} from './cat-can-food/cat-can-food';
import {dogBowlFoodFood} from './dog-bowl-food/dog-bowl-food';
import {dogCanFoodFood} from './dog-can-food/dog-can-food';
import {honeyCombFood} from './honey-comb/honey-comb';
import {fishFood} from './fish/fish';
import {acornsFood} from './acorns/acorns';
import {grassFood} from './grass/grass';
import {grainFood} from './grain/grain';
import {mouseFood} from './mouse/mouse';
import {rabbitFood} from './rabbit/rabbit';

export const foodList: Array<FoodType> = [
    catBowlFoodFood,
    catCanFoodFood,
    dogBowlFoodFood,
    dogCanFoodFood,
    honeyCombFood,
    meatFood,
    fishFood,
    acornsFood,
    grassFood,
    grainFood,
    mouseFood,
    rabbitFood,
];

export function getFoodById(id: FoodEnum): FoodType {
    const food: FoodType | void = foodList.find((testFood: FoodType): boolean => {
        return testFood.id === id;
    });

    if (food) {
        return food;
    }

    throw new Error('[getFoodById]: can not find food by id');
}
