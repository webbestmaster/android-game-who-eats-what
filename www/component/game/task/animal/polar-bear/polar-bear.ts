import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import polarBearImage1 from './image/polar-bear-1.svg';
import polarBearImage2 from './image/polar-bear-2.png';

import polarBearSound1 from './sound/polar-bear-1.mp3';

export const polarBearAnimal: AnimalType = {
    foodIdList: [FoodEnum.fish],
    id: AnimalEnum.polarBear,
    imageList: [polarBearImage1, polarBearImage2],
    soundList: [polarBearSound1],
};
