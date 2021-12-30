import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import goatImage1 from './image/goat-1.svg';
import goatImage2 from './image/goat-2.svg';

import goatSound1 from './sound/goat-1.mp3';

export const goatAnimal: AnimalType = {
    foodIdList: [FoodEnum.grass],
    id: AnimalEnum.goat,
    imageList: [goatImage1, goatImage2],
    soundList: [goatSound1],
};
