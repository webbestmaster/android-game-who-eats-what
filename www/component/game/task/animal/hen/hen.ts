import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import henImage1 from './image/hen-1.svg';

import henSound1 from './sound/hen-1.mp3';

export const henAnimal: AnimalType = {
    foodIdList: [FoodEnum.grain, FoodEnum.worm],
    id: AnimalEnum.hen,
    imageList: [henImage1],
    soundList: [henSound1],
};
