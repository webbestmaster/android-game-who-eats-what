import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import rabbitImage1 from './image/rabbit-1.svg';
import rabbitImage2 from './image/rabbit-2.svg';
import rabbitImage3 from './image/rabbit-3.svg';

import rabbitSound1 from './sound/rabbit-1.mp3';

export const rabbitAnimal: AnimalType = {
    foodIdList: [FoodEnum.carrot],
    id: AnimalEnum.rabbit,
    imageList: [rabbitImage1, rabbitImage2, rabbitImage3],
    soundList: [rabbitSound1],
};
