import {useEffect, useMemo, useState} from 'react';

import {SingleTouchCoordinatesType, SingleTouchType, UseSingleTouchArgumentsType} from './single-touch-type';
import {defaultSingleTouchCoordinates} from './single-touch-const';
import {addListeners, PointListenerMapType, removeListeners} from './single-touch-initialize';

export function useSingleTouch(data: UseSingleTouchArgumentsType): SingleTouchType {
    const {onTouchEnd, id} = data;
    const [coordinates, setCoordinates] = useState<SingleTouchCoordinatesType>(defaultSingleTouchCoordinates);
    const [startCoordinates, setStartCoordinates] = useState<SingleTouchCoordinatesType>(defaultSingleTouchCoordinates);
    // const [deltaCoordinates, setDeltaCoordinates] = useState<SingleTouchCoordinatesType>(defaultSingleTouchCoordinates);
    const [isPressed, setIsPressed] = useState<boolean>(false);
    // const id = String(Date.now());

    const pointListenerMap: PointListenerMapType = useMemo(() => {
        return {
            id,
            onChangePressed: setIsPressed,
            onPointEnd: onTouchEnd,
            onPointMove: setCoordinates,
            onPointStart: setStartCoordinates,
        };
    }, [id, onTouchEnd]);

    useEffect(() => {
        console.log('useSingleTouch - add listeners');

        addListeners(pointListenerMap);

        return () => {
            console.log('useSingleTouch - remove listeners');

            removeListeners(id);
        };
    }, [id, pointListenerMap]);

    /* const onPointStart = useCallback((event: TouchEvent) => {
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
*/
    /*
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
    */

    return {
        coordinates,
        // deltaCoordinates,
        isPressed,
        startCoordinates,
    };
}
