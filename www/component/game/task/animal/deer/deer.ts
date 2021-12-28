import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import deerImage1 from './image/deer-1.svg';
import deerImage2 from './image/deer-2.svg';

export const deerAnimal: AnimalType = {
    foodIdList: [FoodEnum.grass],
    id: AnimalEnum.deer,
    imageList: [deerImage1, deerImage2],
};
