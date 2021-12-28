import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import cowImage1 from './image/cow-1.svg';

export const cowAnimal: AnimalType = {
    foodIdList: [FoodEnum.grass],
    id: AnimalEnum.cow,
    imageList: [cowImage1],
};
