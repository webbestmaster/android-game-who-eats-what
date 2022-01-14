import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import foxImage1 from './image/fox-1.svg';

import foxSound1 from './sound/fox-1.mp3';

export const foxAnimal: AnimalType = {
    foodIdList: [FoodEnum.mouse, FoodEnum.rabbit, FoodEnum.meat],
    id: AnimalEnum.fox,
    imageList: [foxImage1],
    soundList: [foxSound1],
};
