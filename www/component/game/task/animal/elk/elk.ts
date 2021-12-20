import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import elkImage1 from './image/elk-1.svg';

export const elkAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.elk,
    imageList: [elkImage1],
};
