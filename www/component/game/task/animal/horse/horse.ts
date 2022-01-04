import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import horseImage1 from './image/horse-1.svg';

import horseSound1 from './sound/horse-1.mp3';

export const horseAnimal: AnimalType = {
    foodIdList: [FoodEnum.grass, FoodEnum.apple],
    id: AnimalEnum.horse,
    imageList: [horseImage1],
    soundList: [horseSound1],
};
