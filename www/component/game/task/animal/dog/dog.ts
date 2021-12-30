import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import dogImage1 from './image/dog-1.svg';

import dogSound1 from './sound/dog-1.mp3';

export const dogAnimal: AnimalType = {
    foodIdList: [FoodEnum.dogBowlFood, FoodEnum.dogCanFood],
    id: AnimalEnum.dog,
    imageList: [dogImage1],
    soundList: [dogSound1],
};
