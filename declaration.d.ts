/* eslint-disable import/no-default-export, init-declarations */

declare module '*.svg' {
    const content: string;

    export default content;
}

declare module '*.png' {
    const content: string;

    export default content;
}

declare module '*.jpg' {
    const content: string;

    export default content;
}

declare module '*.md' {
    const content: string;

    export default content;
}

declare module '*.txt' {
    const content: string;

    export default content;
}

declare module '*.mp3' {
    const content: string;

    export default content;
}

declare const IS_PRODUCTION: unknown;

declare const BUILD_DATE_H: unknown;

declare const Android: {displayInterstitial: () => void} | undefined;

/*
declare module '*.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.mp3';
*/
