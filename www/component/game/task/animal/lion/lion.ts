import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import lionImage1 from './image/lion-1.svg';
import lionImage2 from './image/lion-2.svg';
import lionImage3 from './image/lion-3.png';
import lionImage4 from './image/lion-4.png';

import lionSound1 from './sound/lion-1.mp3';

export const lionAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat, FoodEnum.rabbit],
    id: AnimalEnum.lion,
    imageList: [lionImage1, lionImage2, lionImage3, lionImage4],
    soundList: [lionSound1],
};
