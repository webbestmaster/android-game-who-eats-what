import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import bearImage1 from './image/bear-1.svg';
import bearImage2 from './image/bear-2.svg';

export const bearAnimal: AnimalType = {
    foodIdList: [FoodEnum.honeyComb, FoodEnum.fish],
    id: AnimalEnum.bear,
    imageList: [bearImage1, bearImage2],
};
