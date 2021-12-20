import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import wolfImage1 from './image/wolf-1.svg';
import wolfImage2 from './image/wolf-2.svg';

export const wolfAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.wolf,
    imageList: [wolfImage1, wolfImage2],
};
