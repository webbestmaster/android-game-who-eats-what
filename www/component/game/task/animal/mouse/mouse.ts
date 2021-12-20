import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import mouseImage1 from './image/mouse-1.svg';
import mouseImage2 from './image/mouse-2.svg';

export const mouseAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.mouse,
    imageList: [mouseImage1, mouseImage2],
};
