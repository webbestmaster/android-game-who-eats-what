import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import moleImage1 from './image/mole-1.svg';

import moleSound1 from './sound/mole-1.mp3';

export const moleAnimal: AnimalType = {
    foodIdList: [FoodEnum.worm],
    id: AnimalEnum.mole,
    imageList: [moleImage1],
    soundList: [moleSound1],
};
