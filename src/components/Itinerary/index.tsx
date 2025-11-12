import './itinerary.sass';
import { IconToast, IconCeremony, IconPhotograph, IconDinner, IconCelebration, IconRings, IconWeddingRings } from '../Icons';
import { OrnamentBottom } from '../Ornaments';
import texture from '../../assets/images/itinerary-texture.webp';

const ShadowIcon = () => {
    return (
        <svg className="itinerary__icon-shadow" width="109" height="109" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    const itinerary = [
        {
            time: '4:00 pm',
            icon: <IconCeremony className="itinerary__icon-icon" />,
            description: 'Ceremonia'
        },
        {
            time: '5:00 pm',
            icon: <IconToast className="itinerary__icon-icon" />,
            description: 'Brindis'
        },
        {
            time: '5:30 pm',
            icon: <IconPhotograph className="itinerary__icon-icon" />,
            description: 'Fotografía'
        },
        {
            time: '6:00 pm',
            icon: <IconDinner className="itinerary__icon-icon" />,
            description: 'Cena'
        },
        {
            time: '7:30 pm',
            icon: <IconCelebration className="itinerary__icon-icon" />,
            description: 'Celebración'
        },
        {
            time: '11:00 pm',
            icon: <IconRings className="itinerary__icon-icon" />,
            description: 'Felices para siempre'
        }
    ];

    return (
        <section className="section itinerary">
            <div className="section__container itinerary__container">
                <figure className="itinerary__texture">
                    <img className="itinerary__texture-image" src={texture} alt="Texture" />
                </figure>
                
                <header className="itinerary__head">
                    <h3 className="itinerary__title">Itinerario</h3>
                </header>

                <ul className="itinerary__list">
                    <IconWeddingRings className="itinerary__ornament-top" />
                    {itinerary.map((item, index) => (
                        <li className="itinerary__item" key={index}>
                            <time className="itinerary__time">{item.time}</time>
                            <div className="itinerary__icon">
                                {item.icon}
                                <ShadowIcon />
                            </div>
                            <p className="itinerary__description">{item.description}</p>
                        </li>
                    ))}
                    <OrnamentBottom className="itinerary__ornament-bottom" />
                </ul>
            </div>
        </section>
    );
};

export default Itinerary;