/* global TouchEvent */

import {useEffect, useState} from 'react';

import {SingleTouchCoordinatesType, SingleTouchType} from './single-touch-type';
import {getBody, getCoordinatesFromTouch} from './single-touch-helper';
import {defaultSingleTouchCoordinates} from './single-touch-const';

export function useSingleTouch(): SingleTouchType {
    const [coordinates, setCoordinates] = useState<SingleTouchCoordinatesType>(defaultSingleTouchCoordinates);
    // const [startCoordinates, setStartCoordinates] = useState<SingleTouchCoordinatesType>(defaultSingleTouchCoordinates);
    const [isPressed, setIsPressed] = useState<boolean>(false);

    function onPointStart(event: TouchEvent) {
        setCoordinates(getCoordinatesFromTouch(event));
        // setStartCoordinates(getCoordinatesFromTouch(event));
        setIsPressed(true);
        console.log('onPointStart');
        console.log(event);
    }

    function onPointMove(event: TouchEvent) {
        setCoordinates(getCoordinatesFromTouch(event));
        console.log('onPointMove');
        console.log(event);
    }

    function onPointEnd(event: TouchEvent) {
        setIsPressed(getCoordinatesFromTouch(event) !== defaultSingleTouchCoordinates);
        console.log('onPointEnd');
        console.log(event);
    }

    useEffect(() => {
        const body = getBody();

        body.addEventListener('touchstart', onPointStart, false);
        body.addEventListener('touchmove', onPointMove, false);
        body.addEventListener('touchend', onPointEnd, false);
        body.addEventListener('touchcancel', onPointEnd, false);

        return () => {
            body.removeEventListener('touchstart', onPointStart, false);
            body.removeEventListener('touchmove', onPointMove, false);
            body.removeEventListener('touchend', onPointEnd, false);
            body.removeEventListener('touchcancel', onPointEnd, false);
        };
    }, []);

    return {
        coordinates,
        isPressed,
        // startCoordinates,
    };
}
