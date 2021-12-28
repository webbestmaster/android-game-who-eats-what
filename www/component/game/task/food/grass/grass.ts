import {FoodEnum, FoodType} from '../food-type';

import grassImage1 from './image/grass-1.png';
import grassImage2 from './image/grass-2.png';

export const grassFood: FoodType = {
    id: FoodEnum.grass,
    imageList: [grassImage1, grassImage2],
};
