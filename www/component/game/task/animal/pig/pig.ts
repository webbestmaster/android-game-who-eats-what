import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import pigImage1 from './image/pig-1.svg';

import pigSound1 from './sound/pig-1.mp3';

export const pigAnimal: AnimalType = {
    foodIdList: [FoodEnum.turnip, FoodEnum.grass],
    id: AnimalEnum.pig,
    imageList: [pigImage1],
    soundList: [pigSound1],
};
