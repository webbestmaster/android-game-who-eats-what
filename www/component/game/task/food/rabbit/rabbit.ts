import {FoodEnum, FoodType} from '../food-type';

import rabbitImage1 from './image/rabbit-1.png';
import rabbitImage2 from './image/rabbit-2.png';

export const rabbitFood: FoodType = {
    id: FoodEnum.rabbit,
    imageList: [rabbitImage1, rabbitImage2],
};
