/* global setTimeout, Android */

export function showInterstitialAd() {
    if (typeof Android === 'undefined') {
        setTimeout(() => {
            console.warn('show interstitial Ad');
        }, 0);
        return;
    }

    setTimeout(() => {
        if ('displayInterstitial' in (Android || {}) && typeof Android?.displayInterstitial === 'function') {
            Android?.displayInterstitial();
        }
    }, 0);
}

/*
setTimeout(function() {
    alert(Android.displayInterstitial)
    Android.displayInterstitial();
}, 3e3)
*/
