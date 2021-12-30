import {getFoodById} from '../food/food';

import {FoodEnum} from '../food/food-type';

import {AnimalEnum, AnimalType} from './animal-type';

import {bearAnimal} from './bear/bear';
import {boarAnimal} from './boar/boar';
import {bullAnimal} from './bull/bull';
import {catAnimal} from './cat/cat';
import {chickAnimal} from './chick/chick';
import {cowAnimal} from './cow/cow';
import {deerAnimal} from './deer/deer';
import {dogAnimal} from './dog/dog';
import {donkeyAnimal} from './donkey/donkey';
import {elkAnimal} from './elk/elk';
import {foxAnimal} from './fox/fox';
import {frogAnimal} from './frog/frog';
import {goatAnimal} from './goat/goat';
import {gooseAnimal} from './goose/goose';
import {hedgehogAnimal} from './hedgehog/hedgehog';
import {henAnimal} from './hen/hen';
import {horseAnimal} from './horse/horse';
import {lizardAnimal} from './lizard/lizard';
import {moleAnimal} from './mole/mole';
import {mouseAnimal} from './mouse/mouse';
import {owlAnimal} from './owl/owl';
import {pigAnimal} from './pig/pig';
import {rabbitAnimal} from './rabbit/rabbit';
import {raccoonAnimal} from './raccoon/raccoon';
import {roosterAnimal} from './rooster/rooster';
import {sheepAnimal} from './sheep/sheep';
import {snakeAnimal} from './snake/snake';
import {squirrelAnimal} from './squirrel/squirrel';
import {turkeyAnimal} from './turkey/turkey';
import {wolfAnimal} from './wolf/wolf';

export const animalList: Array<AnimalType> = [
    bearAnimal,
    boarAnimal,
    bullAnimal,
    catAnimal,
    chickAnimal,
    cowAnimal,
    deerAnimal,
    dogAnimal,
    donkeyAnimal,
    elkAnimal,
    foxAnimal,
    frogAnimal,
    goatAnimal,
    gooseAnimal,
    hedgehogAnimal,
    henAnimal,
    horseAnimal,
    lizardAnimal,
    moleAnimal,
    mouseAnimal,
    owlAnimal,
    pigAnimal,
    rabbitAnimal,
    raccoonAnimal,
    roosterAnimal,
    sheepAnimal,
    snakeAnimal,
    squirrelAnimal,
    turkeyAnimal,
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

function logImage(imageSrc: string) {
    console.log(
        '%c                ',
        [
            'background-size: contain',
            'line-height: 100px;',
            'background-repeat: no-repeat',
            'background-position: center center',
            `background-image: url("http://localhost:9090${imageSrc}")`,
        ].join(';')
    );
}

function renderAnimalDebug() {
    animalList.forEach((animal: AnimalType) => {
        const {id, imageList, foodIdList} = animal;

        console.log('=============[ BEGIN ]=============');
        console.log(`ID: ${id}`);
        console.log('Images:');
        imageList.forEach(logImage);
        console.log('Foods:');
        foodIdList.forEach((foodId: FoodEnum) => {
            getFoodById(foodId).imageList.forEach(logImage);
        });
        console.log('=============[ E N D ]=============');
    });
}

renderAnimalDebug();
