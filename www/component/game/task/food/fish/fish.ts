import {FoodEnum, FoodType} from '../food-type';

import fishImage1 from './image/fish-1.png';
import fishImage2 from './image/fish-2.png';

export const fishFood: FoodType = {
    id: FoodEnum.fish,
    imageList: [fishImage1, fishImage2],
};
