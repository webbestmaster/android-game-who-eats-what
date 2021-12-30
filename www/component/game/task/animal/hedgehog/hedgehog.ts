import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import hedgehogImage1 from './image/hedgehog-1.svg';
import hedgehogImage2 from './image/hedgehog-2.svg';

import hedgehogSound2 from './sound/hedgehog-1.mp3';

export const hedgehogAnimal: AnimalType = {
    foodIdList: [FoodEnum.mouse, FoodEnum.worm],
    id: AnimalEnum.hedgehog,
    imageList: [hedgehogImage1, hedgehogImage2],
    soundList: [hedgehogSound2],
};
