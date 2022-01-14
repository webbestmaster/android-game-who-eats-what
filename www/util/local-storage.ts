/* global localStorage */

export function setToLocalStorage(key: string, item: string) {
    if (typeof localStorage === 'undefined') {
        return;
    }

    localStorage.setItem(key, item);
}

export function getFromLocalStorage(key: string): string {
    if (typeof localStorage === 'undefined') {
        return '';
    }

    return localStorage.getItem(key) || '';
}
