import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import lizardImage1 from './image/lizard-1.svg';

import lizardSound1 from './sound/lizard-1.mp3';

export const lizardAnimal: AnimalType = {
    foodIdList: [FoodEnum.worm, FoodEnum.fly, FoodEnum.mosquito],
    id: AnimalEnum.lizard,
    imageList: [lizardImage1],
    soundList: [lizardSound1],
};
