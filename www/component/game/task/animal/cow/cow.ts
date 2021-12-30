import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import cowImage1 from './image/cow-1.svg';

import cowSound1 from './sound/cow-1.mp3';

export const cowAnimal: AnimalType = {
    foodIdList: [FoodEnum.grass],
    id: AnimalEnum.cow,
    imageList: [cowImage1],
    soundList: [cowSound1],
};
