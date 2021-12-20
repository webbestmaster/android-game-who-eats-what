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
import {boarAnimal} from './boar/boar';
import {bullAnimal} from './bull/bull';
import {mouseAnimal} from './mouse/mouse';
import {catAnimal} from './cat/cat';
import {chickAnimal} from './chick/chick';
import {goatAnimal} from './goat/goat';
import {gooseAnimal} from './goose/goose';
import {sheepAnimal} from './sheep/sheep';
import {cowAnimal} from './cow/cow';
import {dogAnimal} from './dog/dog';
import {donkeyAnimal} from './donkey/donkey';
import {elkAnimal} from './elk/elk';
import {frogAnimal} from './frog/frog';
import {turkeyAnimal} from './turkey/turkey';
import {henAnimal} from './hen/hen';
import {horseAnimal} from './horse/horse';
import {lizardAnimal} from './lizard/lizard';
import {moleAnimal} from './mole/mole';
import {roosterAnimal} from './rooster/rooster';
import {pigAnimal} from './pig/pig';

export const animalList: Array<AnimalType> = [
    cowAnimal,
    moleAnimal,
    horseAnimal,
    lizardAnimal,
    roosterAnimal,
    pigAnimal,
    turkeyAnimal,
    henAnimal,
    frogAnimal,
    elkAnimal,
    donkeyAnimal,
    dogAnimal,
    chickAnimal,
    sheepAnimal,
    goatAnimal,
    gooseAnimal,
    bearAnimal,
    mouseAnimal,
    bullAnimal,
    boarAnimal,
    catAnimal,
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
