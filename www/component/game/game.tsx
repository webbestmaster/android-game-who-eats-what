import {useEffect, useState} from 'react';
import {useScreenSize} from 'react-system-hook';

import {useAudioPlayer} from '../../hook/audio-player-hook/audio-player-hook';
import {sfxAudioList} from '../../audio/sfx/sfx';
import {useSingleTouch} from '../../hook/single-touch-hook/single-touch-hook';
import {SingleTouchCoordinatesType} from '../../hook/single-touch-hook/single-touch-type';

import gameStyle from './game.scss';
import {InteractiveBlockStateType} from './active-block/active-block-type';

export function Game(): JSX.Element {
    const {width, height} = useScreenSize();
    const ignoredAudioPlayer = useAudioPlayer({
        audioId: 'ambient',
        isLoop: true,
        isPlaying: true,
        isShuffle: true,
        // trackList: ambientAudioList,
        trackList: sfxAudioList,
    });

    const blockList: Array<InteractiveBlockStateType> = [
        {
            blockId: 'one',
            defaultCoordinates: {
                pageX: 0,
                pageY: 150,
            },
        },
        {
            blockId: 'two',
            defaultCoordinates: {
                pageX: 110,
                pageY: 150,
            },
        },
        {
            blockId: 'three',
            defaultCoordinates: {
                pageX: 220,
                pageY: 150,
            },
        },
    ];

    const [activeBlockId, setActiveBlockId] = useState<string>('');

    const {coordinates, isPressed} = useSingleTouch();
    const {pageY, pageX} = coordinates;

    /*
        useEffect(() => {
            if (isPressed) {
                return;
            }

            console.log('check here is on coordinate');
            console.log(activeBlockId, coordinates);

            if (pageX < 150) {
                // setActiveBlockId('');
                console.log('placed drop');
                console.log('check block id to show win or loose');
            } else {
                console.log('missed drop');
            }
        }, [isPressed, pageY, pageX, activeBlockId]);
    */

    useEffect(() => {
        if (isPressed === false && activeBlockId !== '') {
            console.info(!isPressed, activeBlockId);
            console.log(pageX, pageY);
        }
    }, [isPressed, pageY, pageX, activeBlockId]);

    /*
    useEffect(() => {
        if (isPressed) {
            return;
        }

        setActiveBlockId('');
    }, [isPressed]);
*/

    return (
        <div className={gameStyle.game}>
            {/* just for debug */}
            <div className={gameStyle.drop_place}>mouth</div>

            <div className={gameStyle.event_hunter} onTouchStart={() => setActiveBlockId('')} />

            {blockList.map((block: InteractiveBlockStateType): JSX.Element => {
                const {blockId, defaultCoordinates} = block;
                const transformCoordinates: SingleTouchCoordinatesType =
                    blockId === activeBlockId && isPressed ? coordinates : defaultCoordinates;

                const transform = `translate3d(${transformCoordinates.pageX}px,${transformCoordinates.pageY}px,0px)`;

                return (
                    <div
                        className={gameStyle.action_block}
                        key={blockId}
                        onTouchStart={() => setActiveBlockId(blockId)}
                        style={{transform}}
                    >
                        {blockId}
                    </div>
                );
            })}
        </div>
    );
}
