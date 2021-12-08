export type SingleTouchCoordinatesType = {
    pageX: number;
    pageY: number;
};

export type SingleTouchType = {
    coordinates: SingleTouchCoordinatesType;
    // startCoordinates: SingleTouchCoordinatesType;
    isPressed: boolean;
};
