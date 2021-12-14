/* global document */

import {createPortal} from 'react-dom';

import popupStyle from './popup.scss';

type PropsType = {
    children: Array<JSX.Element> | JSX.Element;
    closePopup: () => void;
    hasCloseButton: boolean;
    isOpen: boolean;
};

export function Popup(props: PropsType): JSX.Element | null {
    const {isOpen, children, hasCloseButton, closePopup} = props;

    if (!isOpen) {
        return null;
    }

    if (typeof document === 'undefined') {
        return null;
    }

    const {body} = document;

    if (!body) {
        return null;
    }

    const content = (
        <div className={popupStyle.popup__wrapper}>
            <div className={popupStyle.popup__children__wrapper}>
                <div className={popupStyle.popup__children__content}>{children}</div>
            </div>
            {hasCloseButton ? (
                <button className={popupStyle.popup__close_button} onClick={closePopup} type="button">
                    &#10006;
                </button>
            ) : null}
        </div>
    );

    return createPortal(content, body);
}
