import {useEffect, useMemo, useState} from 'react';

import {SingleTouchCoordinatesType, SingleTouchType, UseSingleTouchArgumentsType} from './single-touch-type';
import {defaultSingleTouchCoordinates} from './single-touch-const';
import {addListeners, PointListenerMapType, removeListeners} from './single-touch-initialize';

export function useSingleTouch(data: UseSingleTouchArgumentsType): SingleTouchType {
    const {onTouchEnd, id} = data;
    const [coordinates, setCoordinates] = useState<SingleTouchCoordinatesType>(defaultSingleTouchCoordinates);
    const [startCoordinates, setStartCoordinates] = useState<SingleTouchCoordinatesType>(defaultSingleTouchCoordinates);
    const [isPressed, setIsPressed] = useState<boolean>(false);

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

    return {
        coordinates,
        // deltaCoordinates,
        isPressed,
        startCoordinates,
    };
}
