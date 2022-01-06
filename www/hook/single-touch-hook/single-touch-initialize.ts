/* global TouchEvent */

import {getBody, getCoordinatesFromTouch, getIsPressed} from './single-touch-helper';
import {SingleTouchCoordinatesType} from './single-touch-type';

export let isSingleTouchInitialized = false;
export let isPressed = false;

type PointListenerType = (coordinates: SingleTouchCoordinatesType) => void;
type PressedListenerType = (isPressed: boolean) => void;

export type PointListenerMapType = {
    id: string;
    onChangePressed: PressedListenerType;
    onPointEnd: PointListenerType;
    onPointMove: PointListenerType;
    onPointStart: PointListenerType;
};

const pointListenerMapList: Array<PointListenerMapType> = [];

const startCoordinates: SingleTouchCoordinatesType = {
    pageX: Number.NaN,
    pageY: Number.NaN,
};

const moveCoordinates: SingleTouchCoordinatesType = {
    pageX: Number.NaN,
    pageY: Number.NaN,
};

export function removeListeners(id: string) {
    console.log('removeListeners');
    const listeners: PointListenerMapType | void = pointListenerMapList.find(
        (listenersInlist: PointListenerMapType): boolean => listenersInlist.id === id
    );

    if (!listeners) {
        console.log('[removeListeners]: can not find listeners by id', id);
        return;
    }

    const index = pointListenerMapList.indexOf(listeners);

    pointListenerMapList.splice(index, 1);
}

export function addListeners(data: PointListenerMapType) {
    console.log('addListeners');
    removeListeners(data.id);
    pointListenerMapList.push(data);
}

function onPointStart(event: TouchEvent) {
    const singleTouchCoordinates = getCoordinatesFromTouch(event);

    if (!isPressed) {
        isPressed = true;
        pointListenerMapList.forEach((listenerMap: PointListenerMapType) => {
            listenerMap.onChangePressed(true);
        });
    }

    startCoordinates.pageX = singleTouchCoordinates.pageX;
    startCoordinates.pageY = singleTouchCoordinates.pageY;
    moveCoordinates.pageX = singleTouchCoordinates.pageX;
    moveCoordinates.pageY = singleTouchCoordinates.pageY;

    pointListenerMapList.forEach((listenerMap: PointListenerMapType) => {
        listenerMap.onPointStart({...startCoordinates});
        listenerMap.onPointMove({...startCoordinates});
    });
}

function onPointMove(event: TouchEvent) {
    const singleTouchCoordinates = getCoordinatesFromTouch(event);

    moveCoordinates.pageX = singleTouchCoordinates.pageX;
    moveCoordinates.pageY = singleTouchCoordinates.pageY;

    pointListenerMapList.forEach((listenerMap: PointListenerMapType) => {
        listenerMap.onPointMove({...moveCoordinates});
    });
}

function onPointEnd(event: TouchEvent) {
    if (getIsPressed(event)) {
        return;
    }

    isPressed = false;

    pointListenerMapList.forEach((listenerMap: PointListenerMapType) => {
        listenerMap.onChangePressed(false);
        listenerMap.onPointEnd({...moveCoordinates});
    });
}

export function singleTouchInitialize(): boolean {
    if (isSingleTouchInitialized) {
        return true;
    }

    const body = getBody();

    if (!body) {
        return false;
    }

    console.log('useSingleTouch - add listeners');

    body.addEventListener('touchstart', onPointStart, false);
    body.addEventListener('touchmove', onPointMove, false);
    body.addEventListener('touchend', onPointEnd, false);
    body.addEventListener('touchcancel', onPointEnd, false);

    isSingleTouchInitialized = true;

    return true;
}
