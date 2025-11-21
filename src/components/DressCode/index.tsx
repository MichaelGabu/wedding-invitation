import { useEffect, useRef } from "react";
import { createScope, utils, animate, onScroll, Scope, stagger } from 'animejs';
import { IconDress, IconTie } from '../Icons';
import './dresscode.sass';
import stain from '../../assets/images/stain-dress-code.webp';

const DressCode = () => {
    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<Scope | null>(null);

    useEffect(() => {
        scope.current = createScope({ root })
        scope.current.add(() => {
            const $title = utils.$('.dresscode__title');
            const $separator = utils.$('.dresscode__separator');
            const $items = utils.$('.dresscode__item');

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
            utils.set($separator, {
                scale: 0,
                filter: 'blur(2px)'
            });
            animate($separator, {
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
        });

        return () => scope.current?.revert();
    }, []);

    return (
        <section className="section dresscode" ref={root}>
            <div className="section__container dresscode__container">
                <h3 className="dresscode__title">Dress code</h3>
                <div className="dresscode__row">
                    <div className="dresscode__item">
                        <div className="dresscode__icon">
                            <img src={stain} alt="Stain" className="dresscode__icon-stain" />
                            <IconDress />
                        </div>
                        <h4 className="dresscode__subtitle">Ellas divinas</h4>
                        <p className="dresscode__text">
                            Vestido formal
                            <br />
                            (Se reserva color blanco y rojo)
                        </p>
                    </div>
                    <hr className="dresscode__separator" />
                    <div className="dresscode__item">
                        <div className="dresscode__icon">
                            <img src={stain} alt="Stain" className="dresscode__icon-stain" />
                            <IconTie />
                        </div>
                        <h4 className="dresscode__subtitle">Ellos guapos</h4>
                        <p className="dresscode__text">
                            Traje Formal
                            <br />
                            (Se reserva color azul y chaleco)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DressCode;