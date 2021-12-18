import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import raccoonImage1 from './image/raccoon-1.svg';

export const raccoonAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.raccoon,
    imageList: [raccoonImage1],
};
