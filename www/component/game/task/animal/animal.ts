import {AnimalEnum, AnimalType} from './animal-type';

import {bearAnimal} from './bear/bear';
import {deerAnimal} from './deer/deer';
import {foxAnimal} from './fox/fox';
import {hedgehogAnimal} from './hedgehog/hedgehog';
import {owlAnimal} from './owl/owl';
import {rabbitAnimal} from './rabbit/rabbit';
import {raccoonAnimal} from './raccoon/raccoon';
import {snakeAnimal} from './snake/snake';
import {squirrelAnimal} from './squirrel/squirrel';
import {wolfAnimal} from './wolf/wolf';

export const animalList: Array<AnimalType> = [
    bearAnimal,
    deerAnimal,
    foxAnimal,
    hedgehogAnimal,
    owlAnimal,
    rabbitAnimal,
    raccoonAnimal,
    snakeAnimal,
    squirrelAnimal,
    wolfAnimal,
];

export function getAnimalById(id: AnimalEnum): AnimalType {
    const animal: AnimalType | void = animalList.find((testAnimal: AnimalType): boolean => {
        return testAnimal.id === id;
    });

    if (animal) {
        return animal;
    }

    throw new Error('[getAnimalById]: can not find animal by id');
}
