import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import owlImage1 from './image/owl-1.svg';

export const owlAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.owl,
    imageList: [owlImage1],
};
