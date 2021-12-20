import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import turkeyImage1 from './image/turkey-1.svg';

export const turkeyAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.turkey,
    imageList: [turkeyImage1],
};
