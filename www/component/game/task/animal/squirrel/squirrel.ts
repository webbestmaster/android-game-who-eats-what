import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import squirrelImage1 from './image/squirrel-1.svg';

export const squirrelAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.squirrel,
    imageList: [squirrelImage1],
};
