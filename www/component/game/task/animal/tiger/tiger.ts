import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import tigerImage1 from './image/tiger-1.png';
import tigerImage2 from './image/tiger-2.svg';
import tigerImage3 from './image/tiger-3.png';

import tigerSound1 from './sound/tiger-1.mp3';

export const tigerAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat, FoodEnum.rabbit],
    id: AnimalEnum.tiger,
    imageList: [tigerImage1, tigerImage2, tigerImage3],
    soundList: [tigerSound1],
};
