/* global document */

import {useCallback, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';

import {classNames} from '../../util/css';

import popupStyle from './popup.scss';

type PropsType = {
    children: Array<JSX.Element> | JSX.Element;
    hasCloseButton: boolean;
    isOpen: boolean;
    onTransitionEnd: (isOpenLocal: boolean) => void;
};

export function Popup(props: PropsType): JSX.Element | null {
    const {isOpen, onTransitionEnd, children, hasCloseButton} = props;
    const [isOpenLocal, setIsOpenLocal] = useState<boolean>(false);
    const [isTransitionOpen, setIsTransitionOpen] = useState<boolean>(false);
    const isInTransition = isTransitionOpen !== isOpenLocal;

    useEffect(() => {
        setIsOpenLocal(isOpen);
    }, [isOpen]);

    const handleTransitionEnd = useCallback(() => {
        setIsTransitionOpen(isOpenLocal);
        onTransitionEnd(isOpenLocal);
    }, [isOpenLocal, onTransitionEnd]);

    if (typeof document === 'undefined') {
        return null;
    }

    const {body} = document;

    if (!body) {
        return null;
    }

    // if (isTransitionOpen === false && isOpenLocal === false) {
    //     return null;
    // }

    const content = (
        <div
            className={classNames(popupStyle.popup__wrapper, {
                [popupStyle.popup__state__open]: !isInTransition && isOpenLocal,
                [popupStyle.popup__state__opening]: isInTransition && isOpenLocal,
                [popupStyle.popup__state__closing]: isInTransition && !isOpenLocal,
                [popupStyle.popup__state__closed]: !isInTransition && !isOpenLocal,
            })}
            onTransitionEnd={handleTransitionEnd}
        >
            <div className={popupStyle.popup__children__wrapper}>
                <div className={popupStyle.popup__children__content}>{children}</div>
            </div>
            {hasCloseButton ? (
                <button className={popupStyle.popup__close_button} onClick={() => setIsOpenLocal(false)} />
            ) : null}
        </div>
    );

    return createPortal(content, body);
}
