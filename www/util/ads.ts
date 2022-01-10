/* global setTimeout, Android */

export function showInterstitialAd() {
    if (typeof Android === 'undefined') {
        setTimeout(() => {
            console.warn('show interstitial Ad');
        }, 0);
        return;
    }
    setTimeout(() => {
        Android.displayInterstitial();
    }, 0);
}

/*
setTimeout(function() {
    alert(Android.displayInterstitial)
    Android.displayInterstitial();
}, 3e3)
*/
