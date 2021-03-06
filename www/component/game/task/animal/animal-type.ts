import {FoodEnum} from '../food/food-type';

export enum AnimalEnum {
    boar = 'boar',
    brownBear = 'brown bear',
    bull = 'bull',
    cat = 'cat',
    chick = 'chick',
    cow = 'cow',
    deer = 'deer',
    dog = 'dog',
    donkey = 'donkey',
    elephant = 'elephant',
    elk = 'elk',
    fox = 'fox',
    frog = 'frog',
    goat = 'goat',
    goose = 'goose',
    hedgehog = 'hedgehog',
    hen = 'hen',
    horse = 'horse',
    lion = 'lion',
    lizard = 'lizard',
    mole = 'mole',
    mouse = 'mouse',
    owl = 'owl',
    pig = 'pig',
    polarBear = 'polar bear',
    rabbit = 'rabbit',
    raccoon = 'raccoon',
    rooster = 'rooster',
    sheep = 'sheep',
    snake = 'snake',
    squirrel = 'squirrel',
    tiger = 'tiger',
    turkey = 'turkey',
    wolf = 'wolf',
}

export type AnimalType = {
    foodIdList: Array<FoodEnum>;
    id: AnimalEnum;
    imageList: Array<string>;
    soundList: Array<string>;
};
