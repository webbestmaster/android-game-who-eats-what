import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import donkeyImage1 from './image/donkey-1.svg';

export const donkeyAnimal: AnimalType = {
    foodIdList: [FoodEnum.grass],
    id: AnimalEnum.donkey,
    imageList: [donkeyImage1],
};
