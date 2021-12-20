import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import frogImage1 from './image/frog-1.svg';

export const frogAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.frog,
    imageList: [frogImage1],
};
