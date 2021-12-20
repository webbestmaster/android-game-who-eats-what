import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import gooseImage1 from './image/goose-1.svg';
// import gooseImage2 from './image/goose-2.svg';

export const gooseAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.goose,
    imageList: [
        gooseImage1,
        // gooseImage2
    ],
};
