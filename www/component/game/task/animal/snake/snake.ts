import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import snakeImage1 from './image/snake-1.svg';
import snakeImage2 from './image/snake-2.svg';

export const snakeAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.snake,
    imageList: [snakeImage1, snakeImage2],
};
