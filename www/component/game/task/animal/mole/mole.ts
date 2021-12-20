import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import moleImage1 from './image/mole-1.svg';

export const moleAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.mole,
    imageList: [moleImage1],
};
