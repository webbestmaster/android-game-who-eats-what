/* global setTimeout, Android */

export function onAppLoaded() {
    if (typeof Android === 'undefined') {
        setTimeout(() => {
            console.warn('onAppLoaded');
        }, 0);
        return;
    }

    setTimeout(() => {
        if ('onAppLoaded' in (Android || {}) && typeof Android?.onAppLoaded === 'function') {
            Android?.onAppLoaded();
        }
    }, 0);
}
