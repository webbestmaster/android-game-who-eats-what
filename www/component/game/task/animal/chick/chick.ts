import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import chickImage1 from './image/chick-1.svg';
import chickImage2 from './image/chick-2.svg';

export const chickAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.chick,
    imageList: [chickImage1, chickImage2],
};
