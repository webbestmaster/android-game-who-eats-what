import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import lizardImage1 from './image/lizard-1.svg';

export const lizardAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.lizard,
    imageList: [lizardImage1],
};
