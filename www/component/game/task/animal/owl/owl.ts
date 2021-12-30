import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import owlImage1 from './image/owl-1.svg';
import owlImage2 from './image/owl-2.svg';

import owlSound1 from './sound/owl-1.mp3';

export const owlAnimal: AnimalType = {
    foodIdList: [FoodEnum.mouse],
    id: AnimalEnum.owl,
    imageList: [owlImage1, owlImage2],
    soundList: [owlSound1],
};
