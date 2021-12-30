import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import gooseImage1 from './image/goose-1.svg';

import gooseSound1 from './sound/goose-1.mp3';

export const gooseAnimal: AnimalType = {
    foodIdList: [FoodEnum.grass],
    id: AnimalEnum.goose,
    imageList: [gooseImage1],
    soundList: [gooseSound1],
};
