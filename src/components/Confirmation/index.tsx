import { useEffect, useRef } from "react";
import { createScope, utils, animate, onScroll, Scope } from 'animejs';
import './confirmation.sass';
import Button from '../Button';

interface ConfirmationProps {
    phone?: number | string;
}

const phones = [
    { value: 1, wp: 573016658720 },
    { value: 2, wp: 573143744972 },
]

const Confirmation: React.FC<ConfirmationProps> = ({ phone }) => {
    const number = phones.find((wp) => Number(phone) === wp.value)?.wp;
    const text = 'Hola, quiero confirmar mi asistencia a la boda 💒💍';
    const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(text)}`;
    
    const confirm = () => {
        window.open(url, '_self');
    }

    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<Scope | null>(null);

    useEffect(() => {
        scope.current = createScope({ root })
        scope.current.add(() => {
            const $title = utils.$('.confirmation__title');
            const $subtitle = utils.$('.confirmation__subtitle');
            const $actions = utils.$('.confirmation__actions');

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
                easing: 'easeOut',
                autoplay: onScroll({
                    enter: 'bottom-=10% top',
                    leave: 'top+=10% bottom',
                    debug: false,
                })
            });
            utils.set($subtitle, {
                y: 100,
                opacity: 0,
                filter: 'blur(2px)'
            });
            animate($subtitle, {
                y: [100, 0],
                opacity: [0, 1],
                filter: ['blur(2px)', 'blur(0px)'],
                duration: 1000,
                delay: 100,
                easing: 'easeOut',
                autoplay: onScroll({
                    enter: 'bottom-=10% top',
                    leave: 'top+=10% bottom',
                    debug: false,
                })
            });
            utils.set($actions, {
                y: 100,
                opacity: 0,
                filter: 'blur(2px)'
            });
            animate($actions, {
                y: [100, 0],
                opacity: [0, 1],
                filter: ['blur(2px)', 'blur(0px)'],
                duration: 1000,
                delay: 200,
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
        <section className="section confirmation" ref={root}>
            <div className="section__container confirmation__container">
                <div className="confirmation__content">
                    <h2 className="confirmation__title">Confirma</h2>
                    <h4 className="confirmation__subtitle">Tu asistencia</h4>
                </div>
                
                <div className="confirmation__actions">
                    <Button label="Confirmar" icon="tabler:calendar-heart" className="confirmation__button" onClick={() => confirm()} />
                </div>
            </div>
        </section>
    );
};

export default Confirmation;