import React, { useState, useEffect, useRef } from 'react';
import { createScope, utils, animate, onScroll, Scope, stagger } from 'animejs';
import './timer.sass';

interface TimerProps {
    date: string;
}

const countDown = (date: string) => {
    const countDownDate = new Date(date).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
}

const Timer: React.FC<TimerProps> = ({ date }) => {
    const [timeLeft, setTimeLeft] = useState(countDown(date));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(countDown(date));
        }, 1000);
        return () => clearInterval(interval);
    }, [date]);

    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<Scope | null>(null); 

    useEffect(() => {
        scope.current = createScope({ root })
        scope.current.add(() => {
            const $title = utils.$('.timer__title');
            const $countdownItems = utils.$('.timer__countdown-item');
            const $countdownSeparator = utils.$('.timer__countdown-separator');

            utils.set($title, {
                y: 50,
                opacity: 0,
                filter: 'blur(2px)'
            });
            animate($title, {
                y: [50, 0],
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

            utils.set($countdownItems, {
                y: 100,
                opacity: 0,
                filter: 'blur(2px)'
            });
            animate($countdownItems, {
                y: [100, 0],
                opacity: [0, 1],
                filter: ['blur(2px)', 'blur(0px)'],
                duration: 1000,
                delay: stagger(100, { start: 0 } ),
                easing: 'easeOutQuad',
                autoplay: onScroll({
                    enter: 'bottom-=5% top',
                    leave: 'top+=5% bottom',
                    debug: false,
                })
            });

            utils.set($countdownSeparator, {
                opacity: 0,
                filter: 'blur(2px)'
            });
            animate($countdownSeparator, {
                opacity: [0, 1],
                filter: ['blur(2px)', 'blur(0px)'],
                duration: 500,
                delay: 1000,
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
        <section className="section timer" ref={root}>
            <div className="section__container timer__container">
                <h3 className="timer__title">Falta poco</h3>
                <div className="timer__countdown">
                    <div className="timer__countdown-item">
                        <strong>{timeLeft.days}</strong>
                        <span>Días</span>
                    </div>
                    <span className="timer__countdown-separator">:</span>
                    <div className="timer__countdown-item">
                        <strong>{timeLeft.hours}</strong>
                        <span>Horas</span>
                    </div>
                    <span className="timer__countdown-separator">:</span>
                    <div className="timer__countdown-item">
                        <strong>{timeLeft.minutes}</strong>
                        <span>Minutos</span>
                    </div>
                    <span className="timer__countdown-separator">:</span>
                    <div className="timer__countdown-item">
                        <strong>{timeLeft.seconds}</strong>
                        <span>Segundos</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timer;