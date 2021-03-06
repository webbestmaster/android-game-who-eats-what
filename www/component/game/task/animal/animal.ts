import {getFoodById} from '../food/food';

import {FoodEnum} from '../food/food-type';

import {AnimalEnum, AnimalType} from './animal-type';

import {boarAnimal} from './boar/boar';
import {brownBearAnimal} from './brown-bear/brown-bear';
import {bullAnimal} from './bull/bull';
import {catAnimal} from './cat/cat';
import {chickAnimal} from './chick/chick';
import {cowAnimal} from './cow/cow';
import {deerAnimal} from './deer/deer';
import {dogAnimal} from './dog/dog';
import {donkeyAnimal} from './donkey/donkey';
import {elephantAnimal} from './elephant/elephant';
import {elkAnimal} from './elk/elk';
import {foxAnimal} from './fox/fox';
import {frogAnimal} from './frog/frog';
import {goatAnimal} from './goat/goat';
import {gooseAnimal} from './goose/goose';
import {hedgehogAnimal} from './hedgehog/hedgehog';
import {henAnimal} from './hen/hen';
import {horseAnimal} from './horse/horse';
import {lionAnimal} from './lion/lion';
import {lizardAnimal} from './lizard/lizard';
import {moleAnimal} from './mole/mole';
import {mouseAnimal} from './mouse/mouse';
import {owlAnimal} from './owl/owl';
import {pigAnimal} from './pig/pig';
import {polarBearAnimal} from './polar-bear/polar-bear';
import {rabbitAnimal} from './rabbit/rabbit';
import {raccoonAnimal} from './raccoon/raccoon';
import {roosterAnimal} from './rooster/rooster';
import {sheepAnimal} from './sheep/sheep';
import {snakeAnimal} from './snake/snake';
import {squirrelAnimal} from './squirrel/squirrel';
import {tigerAnimal} from './tiger/tiger';
import {turkeyAnimal} from './turkey/turkey';
import {wolfAnimal} from './wolf/wolf';

export const animalList: Array<AnimalType> = [
    boarAnimal,
    brownBearAnimal,
    bullAnimal,
    catAnimal,
    chickAnimal,
    cowAnimal,
    deerAnimal,
    dogAnimal,
    donkeyAnimal,
    elephantAnimal,
    elkAnimal,
    foxAnimal,
    frogAnimal,
    goatAnimal,
    gooseAnimal,
    hedgehogAnimal,
    henAnimal,
    horseAnimal,
    lionAnimal,
    lizardAnimal,
    moleAnimal,
    mouseAnimal,
    owlAnimal,
    pigAnimal,
    polarBearAnimal,
    rabbitAnimal,
    raccoonAnimal,
    roosterAnimal,
    sheepAnimal,
    snakeAnimal,
    squirrelAnimal,
    tigerAnimal,
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
