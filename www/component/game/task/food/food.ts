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
import {blueberryFood} from './blueberry/blueberry';
import {flyFood} from './fly/fly';
import {mosquitoFood} from './mosquito/mosquito';
import {wormFood} from './worm/worm';
import {cheeseFood} from './cheese/cheese';
import {turnipFood} from './turnip/turnip';
import {carrotFood} from './carrot/carrot';
import {frogFood} from './frog/frog';
import {nutsFood} from './nuts/nuts';

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
    blueberryFood,
    flyFood,
    mosquitoFood,
    wormFood,
    cheeseFood,
    turnipFood,
    carrotFood,
    frogFood,
    nutsFood,
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
