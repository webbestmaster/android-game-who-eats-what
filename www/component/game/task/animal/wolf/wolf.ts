import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import wolfImage1 from './image/wolf-1.svg';
import wolfImage2 from './image/wolf-2.svg';

import wolfSound1 from './sound/wolf-1.mp3';

export const wolfAnimal: AnimalType = {
    foodIdList: [FoodEnum.rabbit],
    id: AnimalEnum.wolf,
    imageList: [wolfImage1, wolfImage2],
    soundList: [wolfSound1],
};
