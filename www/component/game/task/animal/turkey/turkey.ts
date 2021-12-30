import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import turkeyImage1 from './image/turkey-1.svg';

import turkeySound1 from './sound/turkey-1.mp3';

export const turkeyAnimal: AnimalType = {
    foodIdList: [FoodEnum.grain, FoodEnum.worm],
    id: AnimalEnum.turkey,
    imageList: [turkeyImage1],
    soundList: [turkeySound1],
};
