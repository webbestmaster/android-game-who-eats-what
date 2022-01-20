/* global window */

import {useCallback, useEffect, useMemo, useState} from 'react';

export function useAppIsActive(): boolean {
    const [isActive, setIsActive] = useState<boolean>(true);

    const appPauseEventName = 'appPause';
    const appResumeEventName = 'appResume';

    const handleResume = useCallback(() => {
        setIsActive(true);
    }, []);

    const handlePause = useCallback(() => {
        setIsActive(false);
    }, []);

    useEffect(() => {
        window.addEventListener(appResumeEventName, handleResume, false);
        window.addEventListener(appPauseEventName, handlePause, false);

        return () => {
            window.removeEventListener(appResumeEventName, handleResume, false);
            window.removeEventListener(appPauseEventName, handlePause, false);
        };
    }, [handleResume, handlePause]);

    return useMemo((): boolean => isActive, [isActive]);
}
