import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import boarImage1 from './image/boar.svg';

import boarSound1 from './sound/pig-1.mp3';

export const boarAnimal: AnimalType = {
    foodIdList: [FoodEnum.acorns, FoodEnum.grass, FoodEnum.apple],
    id: AnimalEnum.boar,
    imageList: [boarImage1],
    soundList: [boarSound1],
};
