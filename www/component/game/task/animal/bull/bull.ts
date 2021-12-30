import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import bullImage1 from './image/bull.svg';

import bullSound1 from './sound/bull-1.mp3';

export const bullAnimal: AnimalType = {
    foodIdList: [FoodEnum.grass],
    id: AnimalEnum.bull,
    imageList: [bullImage1],
    soundList: [bullSound1],
};
