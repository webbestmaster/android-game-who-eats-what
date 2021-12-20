import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import sheepImage1 from './image/sheep-1.svg';
import sheepImage2 from './image/sheep-2.svg';

export const sheepAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.sheep,
    imageList: [sheepImage1, sheepImage2],
};
