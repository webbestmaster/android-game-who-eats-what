import {Dispatch, SetStateAction} from 'react';

import gameHudStyle from './game-hud.scss';

import ambientOn from './image/ambient-on.svg';
import ambientOff from './image/ambient-off.svg';
import sfxOn from './image/sfx-on.svg';
import sfxOff from './image/sfx-off.svg';

type PropsType = {
    isAmbientEnabled: boolean;
    isSfxEnabled: boolean;
    setIsAmbientEnabled: Dispatch<SetStateAction<boolean>>;
    setIsSfxEnabled: Dispatch<SetStateAction<boolean>>;
};

export function GameHud(props: PropsType): JSX.Element {
    const {isAmbientEnabled, setIsAmbientEnabled, isSfxEnabled, setIsSfxEnabled} = props;

    return (
        <div className={gameHudStyle.game_hud}>
            <button
                className={gameHudStyle.game_hud__button}
                onClick={() => setIsAmbientEnabled((currentIsAmbient: boolean): boolean => !currentIsAmbient)}
                type="button"
            >
                <img
                    alt="ambient"
                    className={gameHudStyle.game_hud__button__image}
                    src={isAmbientEnabled ? ambientOn : ambientOff}
                />
            </button>
            <button
                className={gameHudStyle.game_hud__button}
                onClick={() => setIsSfxEnabled((currentIsSfx: boolean): boolean => !currentIsSfx)}
                type="button"
            >
                <img alt="sfx" className={gameHudStyle.game_hud__button__image} src={isSfxEnabled ? sfxOn : sfxOff} />
            </button>
        </div>
    );
}
