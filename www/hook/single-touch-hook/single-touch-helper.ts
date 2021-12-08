/* global document, HTMLElement, TouchEvent */

import {SingleTouchCoordinatesType} from './single-touch-type';
import {defaultSingleTouchCoordinates} from './single-touch-const';

export function getBody(): HTMLElement {
    if (typeof document === 'undefined') {
        throw new TypeError('[getBody]: document is undefined');
    }

    const {body} = document;

    if (typeof body === 'undefined') {
        throw new TypeError('[getBody]: body is undefined');
    }

    return body;
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
