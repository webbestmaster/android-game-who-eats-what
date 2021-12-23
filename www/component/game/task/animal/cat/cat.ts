import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import catImage1 from './image/cat-1.svg';

export const catAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.cat,
    imageList: [catImage1],
};