export type SingleTouchCoordinatesType = {
    pageX: number;
    pageY: number;
};

export type SingleTouchType = {
    coordinates: SingleTouchCoordinatesType;
    // deltaCoordinates: SingleTouchCoordinatesType;
    isPressed: boolean;
    startCoordinates: SingleTouchCoordinatesType;
};

export type UseSingleTouchArgumentsType = {
    id: string;
    onTouchEnd: (coordinates: SingleTouchCoordinatesType) => void;
};
