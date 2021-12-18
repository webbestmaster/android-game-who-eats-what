import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import foxImage1 from './image/fox-1.svg';

export const foxAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.fox,
    imageList: [foxImage1],
};
