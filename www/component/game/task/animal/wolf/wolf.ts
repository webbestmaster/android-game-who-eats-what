import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import wolfImage1 from './image/wolf-1.svg';

export const wolfAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.wolf,
    imageList: [wolfImage1],
};
