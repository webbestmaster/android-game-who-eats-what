import {FoodEnum} from '../food/food-type';

export enum AnimalEnum {
    bear = 'bear',
    deer = 'deer',
    fox = 'fox',
    hedgehog = 'hedgehog',
    owl = 'owl',
    rabbit = 'rabbit',
    raccoon = 'raccoon',
    snake = 'snake',
    squirrel = 'squirrel',
    wolf = 'wolf',
}

export type AnimalType = {
    foodIdList: Array<FoodEnum>;
    id: AnimalEnum;
    imageList: Array<string>;
};
