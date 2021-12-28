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

import {hedgehogAnimal} from './hedgehog/hedgehog';
import {owlAnimal} from './owl/owl';
import {rabbitAnimal} from './rabbit/rabbit';
import {raccoonAnimal} from './raccoon/raccoon';
import {snakeAnimal} from './snake/snake';
import {squirrelAnimal} from './squirrel/squirrel';
import {wolfAnimal} from './wolf/wolf';
import {mouseAnimal} from './mouse/mouse';
import {goatAnimal} from './goat/goat';
import {gooseAnimal} from './goose/goose';
import {sheepAnimal} from './sheep/sheep';
import {frogAnimal} from './frog/frog';
import {turkeyAnimal} from './turkey/turkey';
import {henAnimal} from './hen/hen';
import {horseAnimal} from './horse/horse';
import {lizardAnimal} from './lizard/lizard';
import {moleAnimal} from './mole/mole';
import {roosterAnimal} from './rooster/rooster';
import {pigAnimal} from './pig/pig';

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

    // moleAnimal,
    // horseAnimal,
    // lizardAnimal,
    // roosterAnimal,
    // pigAnimal,
    // turkeyAnimal,
    // henAnimal,
    // frogAnimal,
    // sheepAnimal,
    // goatAnimal,
    // gooseAnimal,
    // mouseAnimal,
    // hedgehogAnimal,
    // owlAnimal,
    // rabbitAnimal,
    // raccoonAnimal,
    // snakeAnimal,
    // squirrelAnimal,
    // wolfAnimal,
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
