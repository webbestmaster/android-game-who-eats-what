import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import henImage1 from './image/hen-1.svg';

export const henAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.hen,
    imageList: [henImage1],
};
