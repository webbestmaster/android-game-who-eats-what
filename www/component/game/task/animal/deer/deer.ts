import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import deerImage1 from './image/deer-1.svg';
import deerImage2 from './image/deer-2.svg';

import deerSound1 from './sound/deer-1.mp3';

export const deerAnimal: AnimalType = {
    foodIdList: [FoodEnum.grass, FoodEnum.blueberry],
    id: AnimalEnum.deer,
    imageList: [deerImage1, deerImage2],
    soundList: [deerSound1],
};
