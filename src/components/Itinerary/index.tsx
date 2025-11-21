import { useEffect, useRef } from "react";
import { createScope, utils, animate, onScroll, Scope, stagger } from 'animejs';
import './itinerary.sass';
import { IconWelcome, IconCeremony, IconPhotograph, IconDinner, IconCelebration, IconRings, IconWeddingRings } from '../Icons';
import { OrnamentBottom } from '../Ornaments';
import texture from '../../assets/images/itinerary-texture.webp';

const ShadowIcon = () => {
    return (
        <svg className="itinerary__item-icon-shadow" width="109" height="109" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1" filter="url(#filter0_g_265_6500)">
                <rect x="22.5" y="22.5" width="64" height="64" rx="32" fill="var(--primary-color)"/>
            </g>
            <g opacity="0.2" filter="url(#filter1_g_265_6500)">
                <rect x="40.5" y="40.5" width="28" height="28" rx="14" fill="var(--primary-color)"/>
            </g>
            <defs>
                <filter id="filter0_g_265_6500" x="0" y="0" width="109" height="109" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feTurbulence type="fractalNoise" baseFrequency="0.4166666567325592 0.4166666567325592" numOctaves="3" seed="6224" />
                    <feDisplacementMap in="shape" scale="45" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
                    <feMerge result="effect1_texture_265_6500">
                    <feMergeNode in="displacedImage"/>
                    </feMerge>
                </filter>
                <filter id="filter1_g_265_6500" x="18" y="18" width="73" height="73" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feTurbulence type="fractalNoise" baseFrequency="0.4166666567325592 0.4166666567325592" numOctaves="3" seed="6224" />
                    <feDisplacementMap in="shape" scale="45" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
                    <feMerge result="effect1_texture_265_6500">
                    <feMergeNode in="displacedImage"/>
                    </feMerge>
                </filter>
            </defs>
        </svg>
    )
};

const Itinerary = () => {
    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<Scope | null>(null);

    useEffect(() => {
        scope.current = createScope({ root })
        scope.current.add(() => {
            const $items = utils.$('.itinerary__item');

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

    const itinerary = [
        {
            icon: <IconWelcome className="itinerary__icon-icon" />,
            title: 'Entrada',
            time: '3:00 pm',
            description: 'Te esperamos con los brazos abiertos'
        },
        {
            icon: <IconCeremony className="itinerary__icon-icon" />,
            title: 'Eucaristía',
            time: '4:00 pm',
            description: 'Asiste a nuestra reunión para siempre'
        },
        // {
        //     icon: <IconToast className="itinerary__icon-icon" />,
        //     title: 'Brindis',
        //     time: '5:00 pm',
        //     description: 'Levantemos la copa por nuestra historia y lo que viene'
        // },
        {
            icon: <IconPhotograph className="itinerary__icon-icon" />,
            title: 'Photocall',
            time: '5:00 pm',
            description: 'Guardemos este momento inolvidable'
        },
        {
            icon: <IconDinner className="itinerary__icon-icon" />,
            title: 'Cena',
            time: '6:00 pm',
            description: 'Cenar juntos hace este día más especial'
        },
        {
            icon: <IconCelebration className="itinerary__icon-icon" />,
            title: 'Celebración',
            time: '7:00 pm',
            description: 'Que cada paso sea una sola felicidad compartida'
        },
        {
            icon: <IconRings className="itinerary__item-icon-icon" />,
            title: 'Felices para siempre',
            time: '11:00 pm',
            description: 'Gracias por acompañarnos'
        }
    ];

    return (
        <section className="section itinerary" ref={root}>
            <div className="section__container itinerary__container">
                <figure className="itinerary__texture">
                    <img className="itinerary__texture-image" src={texture} alt="Texture" />
                </figure>
                
                <header className="itinerary__head">
                    <h2 className="itinerary__title">Itinerario</h2>
                </header>

                <IconWeddingRings className="itinerary__ornament-top" />
                <ul className="itinerary__list">
                    {itinerary.map((item, index) => (
                        <li className="itinerary__item" key={index}>
                            <div className="itinerary__item-content">
                                <div className="itinerary__item-head">
                                    <h3 className="itinerary__item-title">{item.title}</h3>
                                    <time className="itinerary__item-time">{item.time}</time>
                                </div>
                                <p className="itinerary__item-description">{item.description}</p>
                            </div>

                            <svg className="itinerary__item-separator" width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3.28122C12 1.46914 10.5527 0 8.76726 0C7.59158 0 6.56589 0.638745 6 1.59093C5.4341 0.639065 4.40842 0 3.23274 0C1.44726 0.000320494 0 1.46914 0 3.28122C0 3.6953 0.0789473 4.09015 0.216947 4.45487C1.28589 7.57552 6 11 6 11C6 11 10.7141 7.57552 11.7834 4.45487C11.9214 4.09015 12 3.6953 12 3.28122Z" fill="#D3897C"/>
                            </svg>

                            <div className="itinerary__item-icon">
                                <div className="itinerary__item-icon-wrapper">
                                    {item.icon}
                                    <ShadowIcon />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <OrnamentBottom className="itinerary__ornament-bottom" />
            </div>
        </section>
    );
};

export default Itinerary;