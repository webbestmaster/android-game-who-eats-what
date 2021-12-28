import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import bullImage1 from './image/bull.svg';

export const bullAnimal: AnimalType = {
    foodIdList: [FoodEnum.grass],
    id: AnimalEnum.bull,
    imageList: [bullImage1],
};
