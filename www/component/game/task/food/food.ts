import {FoodEnum, FoodType} from './food-type';

import {acornsFood} from './acorns/acorns';
import {appleFood} from './apple/apple';
import {blueberryFood} from './blueberry/blueberry';
import {carrotFood} from './carrot/carrot';
import {catBowlFoodFood} from './cat-bowl-food/cat-bowl-food';
import {catCanFoodFood} from './cat-can-food/cat-can-food';
import {cheeseFood} from './cheese/cheese';
import {dogBowlFoodFood} from './dog-bowl-food/dog-bowl-food';
import {dogCanFoodFood} from './dog-can-food/dog-can-food';
import {fishFood} from './fish/fish';
import {flyFood} from './fly/fly';
import {frogFood} from './frog/frog';
import {grainFood} from './grain/grain';
import {grassFood} from './grass/grass';
import {honeyCombFood} from './honey-comb/honey-comb';
// import {meatFood} from './meat/meat';
import {mosquitoFood} from './mosquito/mosquito';
import {mouseFood} from './mouse/mouse';
import {nutsFood} from './nuts/nuts';
import {rabbitFood} from './rabbit/rabbit';
import {turnipFood} from './turnip/turnip';
import {wormFood} from './worm/worm';

export const foodList: Array<FoodType> = [
    acornsFood,
    appleFood,
    blueberryFood,
    carrotFood,
    catBowlFoodFood,
    catCanFoodFood,
    cheeseFood,
    dogBowlFoodFood,
    dogCanFoodFood,
    fishFood,
    flyFood,
    frogFood,
    grainFood,
    grassFood,
    honeyCombFood,
    // meatFood,
    mosquitoFood,
    mouseFood,
    nutsFood,
    rabbitFood,
    turnipFood,
    wormFood,
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
