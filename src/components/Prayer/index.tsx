import React, { useEffect, useRef } from 'react';
import { animate, createScope, utils, Scope, onScroll } from 'animejs';
import './prayer.sass';
import texture from '../../assets/images/prayer-texture.webp';

interface PrayerProps {
    prayer: string;
}

const Prayer: React.FC<PrayerProps> = ({ prayer }) => {
    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<Scope | null>(null);

    useEffect(() => {
        scope.current = createScope({ root })
        scope.current.add(() => {
            const $texture = utils.$('.prayer__texture-image');
            const $text = utils.$('.prayer__text');

            utils.set($texture, {
                filter: 'blur(3rem)',
                opacity: 0,
                scale: 0,
            });
            animate($texture, {
                filter: ['blur(3rem)', 'blur(0rem)'],
                opacity: [0, 1],
                scale: [0, 1],
                easing: 'easeOutQuad',
                autoplay: onScroll({
                    enter: 'bottom-=0% top',
                    leave: 'top+=50% bottom',
                    sync: true,
                    debug: false,
                })
            });
            
            utils.set($text, {
                filter: 'blur(2rem)',
                opacity: 0
            });
            animate($text, {
                filter: ['blur(2rem)', 'blur(0rem)'],
                opacity: [0, 1],
                easing: 'easeOutQuad',
                autoplay: onScroll({
                    enter: 'bottom-=0% top',
                    leave: 'top+=75% bottom',
                    sync: true,
                    debug: false,
                })
            });
        });

        return () => scope.current?.revert();
    }, []);
    
    return (
        <div className="section prayer" ref={root}>
            <div className="section__container prayer__container">
                <figure className="prayer__texture">
                    <img className="prayer__texture-image" src={texture} alt="Texture" />
                </figure>
                <div className="prayer__text" dangerouslySetInnerHTML={{ __html: prayer }} />
            </div>
        </div>
    );
};

export default Prayer;