import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import mouseImage1 from './image/mouse-1.svg';
import mouseImage2 from './image/mouse-2.svg';

import mouseSound1 from './sound/mouse-1.mp3';

export const mouseAnimal: AnimalType = {
    foodIdList: [FoodEnum.grain, FoodEnum.cheese],
    id: AnimalEnum.mouse,
    imageList: [mouseImage1, mouseImage2],
    soundList: [mouseSound1],
};
