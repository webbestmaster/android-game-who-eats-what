import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import catImage1 from './image/cat-1.svg';

import catSound1 from './sound/cat-1.mp3';

export const catAnimal: AnimalType = {
    foodIdList: [FoodEnum.catBowlFood, FoodEnum.catCanFood, FoodEnum.fish, FoodEnum.mouse],
    id: AnimalEnum.cat,
    imageList: [catImage1],
    soundList: [catSound1],
};
