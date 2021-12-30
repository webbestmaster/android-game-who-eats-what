import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import raccoonImage1 from './image/raccoon-1.svg';

import raccoonSound1 from './sound/raccoon-1.mp3';

export const raccoonAnimal: AnimalType = {
    foodIdList: [FoodEnum.fish, FoodEnum.frog],
    id: AnimalEnum.raccoon,
    imageList: [raccoonImage1],
    soundList: [raccoonSound1],
};
