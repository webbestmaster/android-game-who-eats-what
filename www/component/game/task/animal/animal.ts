import {AnimalType} from './animal-type';

import {bearAnimal} from './bear/bear';
import {deerAnimal} from './deer/deer';
import {hedgehogAnimal} from './hedgehog/hedgehog';
import {rabbitAnimal} from './rabbit/rabbit';
import {snakeAnimal} from './snake/snake';
import {wolfAnimal} from './wolf/wolf';

export const animalList: Array<AnimalType> = [
    bearAnimal,
    deerAnimal,
    hedgehogAnimal,
    rabbitAnimal,
    snakeAnimal,
    wolfAnimal,
];

export function getAnimalById(id: string): AnimalType {
    const animal: AnimalType | void = animalList.find((testAnimal: AnimalType): boolean => {
        return testAnimal.id === id;
    });

    if (animal) {
        return animal;
    }

    throw new Error('[getAnimalById]: can not find animal by id');
}
