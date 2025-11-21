import { useEffect, useRef } from 'react';
import { createScope, utils, animate, onScroll, Scope } from 'animejs';
import './location.sass';
import Button from '../Button';
import chapel from '../../assets/images/chapel-draw.webp';

const Location = () => {
    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<Scope | null>(null); 

    useEffect(() => {
        scope.current = createScope({ root })
        scope.current.add(() => {
            const $title = utils.$('.location__title');
            const $subtitle = utils.$('.location__subtitle');
            const $address = utils.$('.location__address');
            const $actions = utils.$('.loaction__actions');

            utils.set($title, {
                y: 25,
                opacity: 0,
                filter: 'blur(2rem)'
            });
            animate($title, {
                y: [25, 0],
                opacity: [0, 1],
                filter: ['blur(2rem)', 'blur(0rem)'],
                duration: 500,
                delay: 0,
                easing: 'easeOutQuad',
                autoplay: onScroll({
                    enter: 'bottom-=10% top',
                    leave: 'top+=10% bottom',
                    debug: false,
                })
            });

            utils.set($subtitle, {
                y: 50,
                opacity: 0,
                filter: 'blur(2rem)'
            });
            animate($subtitle, {
                y: [50, 0],
                opacity: [0, 1],
                filter: ['blur(2rem)', 'blur(0rem)'],
                duration: 750,
                delay: 100,
                easing: 'easeOutQuad',
                autoplay: onScroll({
                    enter: 'bottom-=10% top',
                    leave: 'top+=10% bottom',
                    debug: false,
                })
            });

            utils.set($address, {
                y: 75,
                opacity: 0,
                filter: 'blur(2rem)'
            });
            animate($address, {
                y: [75, 0],
                opacity: [0, 1],
                filter: ['blur(2rem)', 'blur(0rem)'],
                duration: 1000,
                delay: 200,
                easing: 'easeOutQuad',
                autoplay: onScroll({
                    enter: 'bottom-=10% top',
                    leave: 'top+=10% bottom',
                    debug: false,
                })
            });

            utils.set($actions, {
                scale: 0,
                opacity: 0,
                filter: 'blur(2rem)'
            });
            animate($actions, {
                scale: [0, 1],
                opacity: [0, 1],
                filter: ['blur(2rem)', 'blur(0rem)'],
                duration: 1000,
                delay: 300,
                easing: 'easeOutQuad',
                autoplay: onScroll({
                    enter: 'bottom-=10% top',
                    leave: 'top+=10% bottom',
                    debug: false,
                })
            });
        });

        return () => scope.current?.revert();
    }, []);

    const openLocation = () => {
        const url = 'https://maps.app.goo.gl/PVnaaESyrrYWpgfq6';
        window.open(url, '_self');
    }

    return (
        <section className="section location" ref={root}>
            <figure className="location__bg">
                <img className="location__bg-image" src={chapel} alt="Capilla" />
            </figure>
            <div className="section__container location__container">
                <div className="location__content">
                    <h3 className="location__title">Ceremonia y Recepción</h3>
                    <h4 className="location__subtitle">HACIENDA SAN SEBASTIAN</h4>
                    <p className="location__address">Vía Subachoque - El Rosal</p>
                </div>
                <div className="loaction__actions">
                    <Button label="Ver ubicación" icon="tabler:map-pin-heart" onClick={() => openLocation()} />
                </div>
            </div>
        </section>
    );
};

export default Location;