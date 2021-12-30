import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import roosterImage1 from './image/rooster-1.svg';

import roosterSound1 from './sound/rooster-1.mp3';

export const roosterAnimal: AnimalType = {
    foodIdList: [FoodEnum.grain, FoodEnum.worm],
    id: AnimalEnum.rooster,
    imageList: [roosterImage1],
    soundList: [roosterSound1],
};
