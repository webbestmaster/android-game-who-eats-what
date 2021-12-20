import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import rabbitImage1 from './image/rabbit-1.svg';
import rabbitImage2 from './image/rabbit-2.svg';
import rabbitImage3 from './image/rabbit-3.svg';

export const rabbitAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.rabbit,
    imageList: [rabbitImage1, rabbitImage2, rabbitImage3],
};
