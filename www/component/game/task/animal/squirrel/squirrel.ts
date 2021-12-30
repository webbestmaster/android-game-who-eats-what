import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import squirrelImage1 from './image/squirrel-1.svg';

import squirrelSound1 from './sound/squirrel-1.mp3';

export const squirrelAnimal: AnimalType = {
    foodIdList: [FoodEnum.nuts],
    id: AnimalEnum.squirrel,
    imageList: [squirrelImage1],
    soundList: [squirrelSound1],
};
