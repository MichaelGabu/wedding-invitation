import { useEffect, useRef } from "react";
import { createScope, utils, animate, onScroll, Scope, stagger } from 'animejs';
import { OrnamentFlower } from '../Ornaments';
import './parents.sass';

const Parents = () => {
    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<Scope | null>(null);

    useEffect(() => {
        scope.current = createScope({ root })
        scope.current.add(() => {
            const $title = utils.$('.parents__title');
            const $items = utils.$('.parents__item');
            const $ornament = utils.$('.parents__ornament');

            utils.set($title, {
                y: 100,
                opacity: 0,
                filter: 'blur(2px)'
            });
            animate($title, {
                y: [100, 0],
                opacity: [0, 1],
                filter: ['blur(2px)', 'blur(0px)'],
                duration: 1000,
                delay: 0,
                easing: 'easeOutQuad',
                autoplay: onScroll({
                    enter: 'bottom-=10% top',
                    leave: 'top+=10% bottom',
                    debug: false,
                })
            });
            utils.set($items, {
                y: 100,
                opacity: 0,
                filter: 'blur(2px)'
            });
            animate($items, {
                y: [100, 0],
                opacity: [0, 1],
                filter: ['blur(2px)', 'blur(0px)'],
                duration: 1000,
                delay: stagger(100, { start: 0 } ),
                easing: 'easeOutQuad',
                autoplay: onScroll({
                    enter: 'bottom-=10% top',
                    leave: 'top+=10% bottom',
                    debug: false,
                })
            });
            utils.set($ornament, {
                scale: 0,
                filter: 'blur(2px)'
            });
            animate($ornament, {
                scale: [0, 1],
                filter: ['blur(2px)', 'blur(0px)'],
                duration: 1000,
                delay: 750,
                easing: 'easeOut',
                autoplay: onScroll({
                    enter: 'bottom-=10% top',
                    leave: 'top+=10% bottom',
                    debug: false,
                })
            });
        });

        return () => scope.current?.revert();
    }, []);

    return (
        <section className="section parents" ref={root}>
            <div className="section__container parents__container">
                <h3 className="parents__title">Con la bendición de nuestros padres</h3>
                <ul className="parents__list">
                    <li className="parents__item">
                        <h4 className="parents__item-title">Madre de la novia</h4>
                        <p className="parents__item-name">Myriam Segovia</p>
                    </li>
                    <OrnamentFlower className="parents__ornament" />
                    <li className="parents__item">
                        <h4 className="parents__item-title">Padres del novio</h4>
                        <p className="parents__item-name">
                            Rubiela Buitrago <br />
                        & <br />
                            Juan Gaona
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Parents;