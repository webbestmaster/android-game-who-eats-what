import {SingleTouchCoordinatesType} from '../../hook/single-touch-hook/single-touch-type';
import {PlaceType, SizeType} from '../../util/type';
import {getRandomItem} from '../../util/array';
import {getRandomBoolean} from '../../util/boolean';

import {FoodType} from './task/food/food-type';
import {AnimalType} from './task/animal/animal-type';
import {ArrayTrioType, FoodImageType} from './game-type';
import {foodList} from './task/food/food';

type DropPlaceType = {
    height: number;
    left: number;
    top: number;
    width: number;
};

type GetDropPlaceDataArgumentType = {
    dishSize: number;
    screen: SizeType;
};

export function getDropPlaceData(data: GetDropPlaceDataArgumentType): DropPlaceType {
    const {dishSize, screen} = data;
    const {width: screenWidth, height: screenHeight} = screen;

    const blockSize = Math.round(Math.min(screenWidth, screenHeight) * 0.95 - dishSize);

    return {
        height: blockSize,
        left: Math.round((screenWidth - blockSize) / 2),
        top: Math.round((screenHeight - blockSize - dishSize / 1.5) / 2),
        width: blockSize,
    };
}

export type GetDefaultCoordinatesArgumentType = {
    dishSize: number;
    height: number;
    index: number;
    width: number;
};

export function getDefaultCoordinates(data: GetDefaultCoordinatesArgumentType): SingleTouchCoordinatesType {
    const {height, index, width, dishSize} = data;

    const dropPlaceData = getDropPlaceData({dishSize, screen: {height, width}});
    const top = dropPlaceData.top + dropPlaceData.height + dishSize * 0.5;

    switch (index) {
        case 0:
            return {
                pageX: Math.round(width / 2 - dishSize * 1.15),
                pageY: top,
            };
        case 1:
            return {
                pageX: Math.round(width / 2),
                pageY: top,
            };
        case 2:
            return {
                pageX: Math.round(width / 2 + dishSize * 1.15),
                pageY: top,
            };
        default:
            throw new Error('[getDefaultCoordinates]: use 0, 1 or 2');
    }
}

// eslint-disable-next-line complexity
export function getIsInPlace(coordinates: SingleTouchCoordinatesType, place: PlaceType): boolean {
    const {pageY, pageX} = coordinates;
    const {top, width, left, height} = place;

    if (Number.isNaN(pageY) || Number.isNaN(pageX)) {
        return false;
    }

    if (pageX <= left) {
        return false;
    }

    if (pageX >= left + width) {
        return false;
    }

    if (pageY <= top) {
        return false;
    }

    if (pageY >= top + height) {
        return false;
    }

    console.log('[getIsInPlace]: it is in place');

    return true;
}

export function getQuestionFoodList(animal: AnimalType): ArrayTrioType<FoodType> {
    const {foodIdList} = animal;

    let candidateFoodList: ArrayTrioType<FoodType> = [foodList[0], foodList[1], foodList[2]];
    let shuffledList: Array<FoodType> = [];

    // eslint-disable-next-line no-loops/no-loops
    do {
        shuffledList = [...foodList].sort((): number => Math.random() - 0.5);
        candidateFoodList = [shuffledList[0], shuffledList[1], shuffledList[2]];
    } while (!candidateFoodList.some((food: FoodType): boolean => foodIdList.includes(food.id)));

    return candidateFoodList;
}

export function foodToImage(food: FoodType): FoodImageType {
    return {
        isReversed: getRandomBoolean(),
        src: getRandomItem<string>(food.imageList),
    };
}
