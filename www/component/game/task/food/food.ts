import {FoodType} from './food-type';
import {meatFood} from './meat/meat';

export const foodList: Array<FoodType> = [meatFood];

export function getFoodById(id: string): FoodType {
    const food: FoodType | void = foodList.find((testFood: FoodType): boolean => {
        return testFood.id === id;
    });

    if (food) {
        return food;
    }

    throw new Error('[getFoodById]: can not find food by id');
}
