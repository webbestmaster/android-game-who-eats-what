import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import horseImage1 from './image/horse-1.svg';

export const horseAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.horse,
    imageList: [horseImage1],
};
