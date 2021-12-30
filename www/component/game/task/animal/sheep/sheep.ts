import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import sheepImage1 from './image/sheep-1.svg';
import sheepImage2 from './image/sheep-2.svg';

import sheepSound1 from './sound/sheep-1.mp3';

export const sheepAnimal: AnimalType = {
    foodIdList: [FoodEnum.grass],
    id: AnimalEnum.sheep,
    imageList: [sheepImage1, sheepImage2],
    soundList: [sheepSound1],
};
