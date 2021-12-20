import {FoodEnum} from '../food/food-type';

export enum AnimalEnum {
    bear = 'bear',
    boar = 'boar',
    bull = 'bull',
    cat = 'cat',
    chick = 'chick',
    cow = 'cow',
    deer = 'deer',
    dog = 'dog',
    donkey = 'donkey',
    elk = 'elk',
    fox = 'fox',
    frog = 'frog',
    goat = 'goat',
    goose = 'goose',
    hedgehog = 'hedgehog',
    hen = 'hen',
    horse = 'horse',
    lizard = 'lizard',
    mole = 'mole',
    mouse = 'mouse',
    owl = 'owl',
    pig = 'pig',
    rabbit = 'rabbit',
    raccoon = 'raccoon',
    rooster = 'rooster',
    sheep = 'sheep',
    snake = 'snake',
    squirrel = 'squirrel',
    turkey = 'turkey',
    wolf = 'wolf',
}

export type AnimalType = {
    foodIdList: Array<FoodEnum>;
    id: AnimalEnum;
    imageList: Array<string>;
};
