import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import brownBearImage1 from './image/brown-bear-1.svg';
import brownBearImage2 from './image/brown-bear-2.svg';
import brownBearImage3 from './image/brown-bear-3.svg';

import brownBearSound1 from './sound/brown-bear-1.mp3';

export const brownBearAnimal: AnimalType = {
    foodIdList: [FoodEnum.honeyComb, FoodEnum.fish, FoodEnum.blueberry],
    id: AnimalEnum.brownBear,
    imageList: [brownBearImage1, brownBearImage2, brownBearImage3],
    soundList: [brownBearSound1],
};
