import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import boarImage1 from './image/boar.svg';

export const boarAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.boar,
    imageList: [boarImage1],
};
