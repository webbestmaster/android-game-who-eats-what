import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import donkeyImage1 from './image/donkey-1.svg';

import donkeySound1 from './sound/donkey-1.mp3';

export const donkeyAnimal: AnimalType = {
    foodIdList: [FoodEnum.grass],
    id: AnimalEnum.donkey,
    imageList: [donkeyImage1],
    soundList: [donkeySound1],
};
