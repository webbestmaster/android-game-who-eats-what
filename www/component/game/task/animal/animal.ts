import {AnimalType} from './animal-type';

import {bearAnimal} from './bear/bear';
import {rabbitAnimal} from './rabbit/rabbit';

export const animalList: Array<AnimalType> = [bearAnimal, rabbitAnimal];

export function getAnimalById(id: string): AnimalType {
    const animal: AnimalType | void = animalList.find((testAnimal: AnimalType): boolean => {
        return testAnimal.id === id;
    });

    if (animal) {
        return animal;
    }

    throw new Error('[getAnimalById]: can not find animal by id');
}
