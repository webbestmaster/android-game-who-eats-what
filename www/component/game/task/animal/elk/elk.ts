import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import elkImage1 from './image/elk-1.svg';

import elkSound1 from './sound/elk-1.mp3';

export const elkAnimal: AnimalType = {
    foodIdList: [FoodEnum.grass, FoodEnum.blueberry],
    id: AnimalEnum.elk,
    imageList: [elkImage1],
    soundList: [elkSound1],
};
