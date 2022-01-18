import {isObjectInclude} from './object';
import {getRandomNumber} from './number';

export function arrayMove<ItemType>(list: Array<ItemType>, fromIndex: number, toIndex: number): Array<ItemType> {
    const item = list[fromIndex];

    list.splice(fromIndex, 1);
    list.splice(toIndex, 0, item);

    return list;
}

export function findInArray<ItemType extends Record<string, unknown>>(
    list: Array<ItemType>,
    query: Partial<ItemType>
): ItemType | null {
    return list.find((item: ItemType): boolean => isObjectInclude(item, query)) || null;
}

export function findInArrayEnsure<ItemType extends Record<string, unknown>>(
    list: Array<ItemType>,
    query: Partial<ItemType>,
    defaultValue: ItemType
): ItemType {
    return findInArray<ItemType>(list, query) || defaultValue;
}

// export function findManyInArray<ItemType>(list: Array<ItemType>, query: Record<string, unknown>): Array<ItemType> {
//     return list.filter((item: ItemType): boolean => isObjectInclude<ItemType>(item, query));
// }

export function findInArrayByValue<ItemType>(list: Array<ItemType>, value: unknown): ItemType | null {
    return list.find((item: ItemType): boolean => item === value) || null;
}

export function findInArrayByValueEnsure<ItemType>(
    list: Array<ItemType>,
    value: unknown,
    defaultValue: ItemType
): ItemType {
    const findResult = findInArrayByValue<ItemType>(list, value);

    return findResult === null ? defaultValue : findResult;
}

export function getUniqueListByKey<ItemType>(list: Array<ItemType>, keyName: keyof ItemType): Array<ItemType> {
    const savedValueList: Array<unknown> = [];

    return list.reduce<Array<ItemType>>((accum: Array<ItemType>, item: ItemType): Array<ItemType> => {
        const value = item[keyName];

        if (!savedValueList.includes(value)) {
            savedValueList.push(value);
            accum.push(item);
        }

        return accum;
    }, []);
}

export function getNextArrayLoopIndex(arrayLength: number, currentIndex: number): number {
    const increasedIndex = currentIndex + 1;

    return increasedIndex >= arrayLength ? 0 : increasedIndex;
}

export function getPreviousArrayLoopIndex(array: Array<unknown>, currentIndex: number): number {
    const {length} = array;
    const decreasedIndex = currentIndex - 1;

    return decreasedIndex < 0 ? length - 1 : decreasedIndex;
}

export function getRandomItem<ItemType>(list: Readonly<Array<ItemType>>): ItemType {
    return list[getRandomNumber(0, list.length)];
}

export function hasAdditionalItem<ItemType>(
    baseList: Readonly<Array<ItemType>>,
    additionalList: Readonly<Array<ItemType>>
): boolean {
    return additionalList.some((item: ItemType): boolean => !baseList.includes(item));
}

export function getRandomNewItem<ItemType>(
    list: Readonly<Array<ItemType>>,
    oldItemList: Readonly<Array<ItemType>>
): ItemType {
    let newItem: ItemType = getRandomItem<ItemType>(list);

    if (!hasAdditionalItem<ItemType>(oldItemList, list)) {
        console.error('[getRandomNewItem]');
        console.log(oldItemList, list);
        return newItem;
    }

    // eslint-disable-next-line no-loops/no-loops
    while (oldItemList.includes(newItem)) {
        newItem = getRandomItem<ItemType>(list);
    }

    return newItem;
}
