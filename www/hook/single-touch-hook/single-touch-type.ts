export type SingleTouchCoordinatesType = {
    pageX: number;
    pageY: number;
};

export type SingleTouchType = {
    coordinates: SingleTouchCoordinatesType;
    deltaCoordinates: SingleTouchCoordinatesType;
    isPressed: boolean;
    startCoordinates: SingleTouchCoordinatesType;
};
