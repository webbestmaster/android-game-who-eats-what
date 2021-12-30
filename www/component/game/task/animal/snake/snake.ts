import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import snakeImage1 from './image/snake-1.svg';
import snakeImage2 from './image/snake-2.svg';

import snakeSound1 from './sound/snake-1.mp3';

export const snakeAnimal: AnimalType = {
    foodIdList: [FoodEnum.frog, FoodEnum.mouse],
    id: AnimalEnum.snake,
    imageList: [snakeImage1, snakeImage2],
    soundList: [snakeSound1],
};
