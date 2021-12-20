import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import pigImage1 from './image/pig-1.svg';

export const pigAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.pig,
    imageList: [pigImage1],
};
