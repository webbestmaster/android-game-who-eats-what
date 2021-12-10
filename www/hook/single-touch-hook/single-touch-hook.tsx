/* global TouchEvent */

import {useCallback, useEffect, useState} from 'react';

import {noop} from '../../util/function';

import {SingleTouchCoordinatesType, SingleTouchType, UseSingleTouchArgumentsType} from './single-touch-type';
import {getBody, getCoordinatesFromTouch, getIsPressed} from './single-touch-helper';
import {defaultSingleTouchCoordinates} from './single-touch-const';

export function useSingleTouch(data: UseSingleTouchArgumentsType): SingleTouchType {
    const {onTouchEnd = noop} = data;
    const [coordinates, setCoordinates] = useState<SingleTouchCoordinatesType>(defaultSingleTouchCoordinates);
    const [startCoordinates, setStartCoordinates] = useState<SingleTouchCoordinatesType>(defaultSingleTouchCoordinates);
    const [deltaCoordinates, setDeltaCoordinates] = useState<SingleTouchCoordinatesType>(defaultSingleTouchCoordinates);
    const [isPressed, setIsPressed] = useState<boolean>(false);

    const onPointStart = useCallback((event: TouchEvent) => {
        const singleTouchCoordinates = getCoordinatesFromTouch(event);

        setCoordinates(singleTouchCoordinates);
        setStartCoordinates(singleTouchCoordinates);
        setIsPressed(true);
        // console.log('onPointStart');
        // console.log(event);
    }, []);

    const onPointMove = useCallback(
        (event: TouchEvent) => {
            const currentTouchCoordinates = getCoordinatesFromTouch(event);

            const newDeltaCoordinates: SingleTouchCoordinatesType = {
                pageX: startCoordinates.pageX - currentTouchCoordinates.pageX,
                pageY: startCoordinates.pageY - currentTouchCoordinates.pageY,
            };

            setCoordinates(currentTouchCoordinates);
            setDeltaCoordinates(newDeltaCoordinates);
        },
        [startCoordinates]
    );

    const onPointEnd = useCallback(
        (event: TouchEvent) => {
            const isNowPressed = getIsPressed(event);

            setIsPressed(isNowPressed);

            if (!isNowPressed) {
                onTouchEnd(coordinates);
            }
        },
        [coordinates, onTouchEnd]
    );

    useEffect(() => {
        const body = getBody();

        console.log('useSingleTouch - add listeners');

        body.addEventListener('touchstart', onPointStart, false);
        body.addEventListener('touchmove', onPointMove, false);
        body.addEventListener('touchend', onPointEnd, false);
        body.addEventListener('touchcancel', onPointEnd, false);

        return () => {
            console.log('useSingleTouch - remove listeners');

            body.removeEventListener('touchstart', onPointStart, false);
            body.removeEventListener('touchmove', onPointMove, false);
            body.removeEventListener('touchend', onPointEnd, false);
            body.removeEventListener('touchcancel', onPointEnd, false);
        };
    }, [onPointEnd, onPointMove, onPointStart]);

    return {
        coordinates,
        deltaCoordinates,
        isPressed,
        startCoordinates,
    };
}
