import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import hedgehogImage1 from './image/hedgehog-1.svg';
import hedgehogImage2 from './image/hedgehog-2.svg';

export const hedgehogAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.hedgehog,
    imageList: [hedgehogImage1, hedgehogImage2],
};
