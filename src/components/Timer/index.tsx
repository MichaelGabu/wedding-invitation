import React, { useState, useEffect } from 'react';
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

    return (
        <section className="section timer">
            <div className="section__container">
                <h3>Falta poco</h3>
                <p>{timeLeft.days} días, {timeLeft.hours} horas, {timeLeft.minutes} minutos, {timeLeft.seconds} segundos</p>
            </div>
        </section>
    );
};

export default Timer;