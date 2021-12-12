/* global document, HTMLElement, TouchEvent */

import {SingleTouchCoordinatesType} from './single-touch-type';
import {defaultSingleTouchCoordinates} from './single-touch-const';

export function getBody(): HTMLElement | null {
    if (typeof document === 'undefined') {
        return null;
    }

    const {body} = document;

    return typeof body === 'undefined' ? null : body;
}

export function getCoordinatesFromTouch(event: TouchEvent): SingleTouchCoordinatesType {
    const firstTouch = event.touches.item(0);

    if (firstTouch) {
        return {
            pageX: Math.round(firstTouch.pageX),
            pageY: Math.round(firstTouch.pageY),
        };
    }

    return defaultSingleTouchCoordinates;
}

export function getIsPressed(event: TouchEvent): boolean {
    return event.touches.length > 0;
}
