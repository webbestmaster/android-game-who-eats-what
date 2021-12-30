import {FoodEnum, FoodType} from '../food-type';

import cheeseImage1 from './image/cheese-1.png';
import cheeseImage2 from './image/cheese-2.png';

export const cheeseFood: FoodType = {
    id: FoodEnum.cheese,
    imageList: [cheeseImage1, cheeseImage2],
};
