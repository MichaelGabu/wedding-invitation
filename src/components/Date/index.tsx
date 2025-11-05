import React, { useEffect, useRef } from "react";
import { createScope, utils, animate, onScroll, Scope, stagger } from 'animejs';
import { format, parseISO } from "date-fns";
import { es } from 'date-fns/locale';
import './date.sass';

interface DateProps {
    date: string; // Should be in ISO 8601 format (e.g., '2024-11-30')
}

const dateBox = (date: Date, className: string, highLight: boolean) => {
    return (
        <div className={'date__box ' + className}>
            <div className="date__box-day">
                <span>{format(date, 'EE', { locale: es }).charAt(0).toUpperCase() + format(date, 'EE', { locale: es }).slice(1)}</span>
            </div>
            <div className="date__box-date">
                <span>{format(date, 'dd')}</span>
                {highLight && 
                    <svg className="date__box-date-highlight" width="62" height="57" viewBox="0 0 62 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M61 17.4061C61 8.34572 53.7637 1 44.8363 1C38.9579 1 33.8295 4.19372 31 8.95467C28.1705 4.19533 23.0421 1 17.1637 1C8.23632 1.0016 1 8.34572 1 17.4061C1 19.4765 1.39474 21.4507 2.08474 23.2743C7.42947 38.8776 31 56 31 56C31 56 54.5705 38.8776 59.9168 23.2743C60.6068 21.4507 61 19.4765 61 17.4061Z" stroke="var(--secondary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                }
            </div>
        </div>
    );
}
    

const DateComponent: React.FC<DateProps> = ({ date }) => {
    // Parse the date string to a Date object
    const d = typeof date === 'string' ? parseISO(date) : new Date(date);
    const yesterday = new Date(d);
    yesterday.setDate(d.getDate() - 1);
    const before_yesterday = new Date(d);
    before_yesterday.setDate(d.getDate() - 2);
    const tomorrow = new Date(d);
    tomorrow.setDate(d.getDate() + 1);
    const after_tomorrow = new Date(d);
    after_tomorrow.setDate(d.getDate() + 2);

    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<Scope | null>(null);

    useEffect(() => {
        scope.current = createScope({ root })
        scope.current.add(() => {
            const $boxes = utils.$('.date__box');
            animate($boxes, {
                x: [100, 0],
                // opacity: [0, 1],
                duration: 1000,
                delay: stagger(50, { start: 0 } ),
                easing: 'easeOutQuad',
                autoplay: onScroll({
                    debug: true,
                })
            });
        });

        return () => scope.current?.revert();
    }, []);
    
    return (
        <section className="section date" ref={root}>
            <div className="section__container date__container">
                <div className="date__row">
                    {dateBox(before_yesterday, 'date__box--before-yesterday', false)}
                    {dateBox(yesterday, 'date__box--yesterday', false)}
                    {dateBox(d, 'date__box--d', true)}
                    {dateBox(tomorrow, 'date__box--tomorrow', false)}
                    {dateBox(after_tomorrow, 'date__box--after-tomorrow', false)}
                </div>
                <div className="date__info">
                    <div className="date__month">
                        <span>{format(d, 'MMMM', { locale: es }).charAt(0).toUpperCase() + format(d, 'MMMM', { locale: es }).slice(1)}</span>
                    </div>
                    <div className="date__year">
                        <span>{format(d, 'yyyy')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DateComponent;