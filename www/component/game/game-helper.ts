import {SingleTouchCoordinatesType} from '../../hook/single-touch-hook/single-touch-type';
import {PlaceType, SizeType} from '../../util/type';

type DropPlaceDataType = {
    height: number;
    left: number;
    top: number;
    width: number;
};

type GetDropPlaceDataArgumentType = {
    dishSize: number;
    screen: SizeType;
};

export function getDropPlaceData(data: GetDropPlaceDataArgumentType): DropPlaceDataType {
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

export function getIsInPlace(coordinates: SingleTouchCoordinatesType, place: PlaceType): boolean {
    const {pageY, pageX} = coordinates;
    const {top, width, left, height} = place;

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
