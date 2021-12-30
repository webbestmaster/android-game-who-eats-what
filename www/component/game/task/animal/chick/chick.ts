import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import chickImage1 from './image/chick-1.svg';
import chickImage2 from './image/chick-2.svg';

import chickSound1 from './sound/chick-1.mp3';

export const chickAnimal: AnimalType = {
    foodIdList: [FoodEnum.grain, FoodEnum.worm],
    id: AnimalEnum.chick,
    imageList: [chickImage1, chickImage2],
    soundList: [chickSound1],
};
