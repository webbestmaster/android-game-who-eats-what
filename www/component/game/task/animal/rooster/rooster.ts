import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import roosterImage1 from './image/rooster-1.svg';

export const roosterAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.rooster,
    imageList: [roosterImage1],
};
