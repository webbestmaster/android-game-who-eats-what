import {createPortal} from 'react-dom';

import {getBody} from '../../hook/single-touch-hook/single-touch-helper';
import {classNames} from '../../util/css';
import {IsRender} from '../is-render/is-render';

import {PopupThemeEnum} from './popup-type';
import popupStyle from './popup.scss';

type PropsType = {
    children: Array<JSX.Element> | JSX.Element | null;
    closePopup: () => void;
    hasCloseButton: boolean;
    isOpen: boolean;
    themeName?: PopupThemeEnum;
};

export function Popup(props: PropsType): JSX.Element | null {
    const {isOpen, children, hasCloseButton, closePopup, themeName = PopupThemeEnum.light} = props;
    const body = getBody();

    if (!isOpen || !body) {
        return null;
    }

    const wrapperClassName = classNames(popupStyle.popup__wrapper, {
        [popupStyle.popup__theme__dark]: themeName === PopupThemeEnum.dark,
        [popupStyle.popup__theme__light]: themeName === PopupThemeEnum.light,
    });

    const content = (
        <div className={wrapperClassName}>
            <div className={popupStyle.popup__children__wrapper}>
                <div className={popupStyle.popup__children__content}>{children}</div>
            </div>
            <IsRender isRender={hasCloseButton}>
                <button className={popupStyle.popup__close_button} onClick={closePopup} type="button" />
            </IsRender>
        </div>
    );

    return createPortal(content, body);
}
