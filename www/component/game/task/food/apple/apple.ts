import {FoodEnum, FoodType} from '../food-type';

import appleImage1 from './image/apple-1.png';
import appleImage2 from './image/apple-2.png';
import appleImage3 from './image/apple-3.png';

export const appleFood: FoodType = {
    id: FoodEnum.apple,
    imageList: [appleImage1, appleImage2, appleImage3],
};
