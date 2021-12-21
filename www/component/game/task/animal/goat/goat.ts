import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import goatImage1 from './image/goat-1.svg';
import goatImage2 from './image/goat-2.svg';

export const goatAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.goat,
    imageList: [goatImage1, goatImage2],
};
