import {FoodEnum, FoodType} from '../food-type';

import grainImage1 from './image/grain-1.png';
import grainImage2 from './image/grain-2.png';
import grainImage3 from './image/grain-3.png';

export const grainFood: FoodType = {
    id: FoodEnum.grain,
    imageList: [grainImage1, grainImage2, grainImage3],
};
