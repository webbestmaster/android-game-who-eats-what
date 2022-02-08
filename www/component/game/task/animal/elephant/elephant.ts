import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import elephantImage1 from './image/elephant-1.png';
import elephantImage2 from './image/elephant-2.svg';

import elephantSound1 from './sound/elephant-1.mp3';
import elephantSound2 from './sound/elephant-2.mp3';
import elephantSound3 from './sound/elephant-3.mp3';
import elephantSound4 from './sound/elephant-4.mp3';

export const elephantAnimal: AnimalType = {
    foodIdList: [FoodEnum.grass],
    id: AnimalEnum.elephant,
    imageList: [elephantImage1, elephantImage2],
    soundList: [elephantSound1, elephantSound2, elephantSound3, elephantSound4],
};
