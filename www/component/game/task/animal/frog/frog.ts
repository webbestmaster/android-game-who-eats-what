import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import frogImage1 from './image/frog-1.svg';

import frogSound1 from './sound/frog-1.mp3';

export const frogAnimal: AnimalType = {
    foodIdList: [FoodEnum.worm, FoodEnum.fly, FoodEnum.mosquito],
    id: AnimalEnum.frog,
    imageList: [frogImage1],
    soundList: [frogSound1],
};
