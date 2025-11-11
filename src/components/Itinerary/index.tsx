import './itinerary.sass';

const IconToast = () => {
    return (
        <svg className="itinerary__icon-icon" width="35" height="49" viewBox="0 0 35 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.88656 31.5138C2.90654 30.7621 0.453 26.7332 1.60704 22.851L5.66731 12.5054L14.9635 14.2643L14.9649 25.3793C14.621 29.4137 10.8652 32.2668 6.88656 31.5138Z" stroke="var(--primary-color)" strokeMiterlimit="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.50014 20.3323L14.6441 23.5932" stroke="var(--primary-color)" strokeMiterlimit="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.88658 31.5137L4.38004 44.7628M4.38004 44.7628L0.801016 46.4836C0.340214 46.7052 0.42858 47.3848 0.93152 47.4814L6.26675 48.49C6.75474 48.5824 7.08913 48.0115 6.77105 47.6309L4.38004 44.7628Z" stroke="var(--primary-color)" strokeMiterlimit="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M27.3576 31.5138C31.3349 30.7621 33.7912 26.7332 32.6358 22.851L28.5756 12.5054L19.2793 14.2643L19.2779 25.3793C19.6205 29.4137 23.3776 32.2668 27.3576 31.5138Z" stroke="var(--primary-color)" strokeMiterlimit="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M31.7413 20.3323L19.6001 23.5932" stroke="var(--primary-color)" strokeMiterlimit="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M27.3576 31.5137L29.8628 44.7628M29.8628 44.7628L33.4432 46.4836C33.904 46.7052 33.8143 47.3848 33.3113 47.4814L27.9761 48.49C27.4881 48.5824 27.1537 48.0115 27.4718 47.6309L29.8628 44.7628Z" stroke="var(--primary-color)" strokeMiterlimit="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.17567 5.04541L13.5227 8.20849" stroke="var(--primary-color)" strokeMiterlimit="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23.6019 5.04541L19.2548 8.20849" stroke="var(--primary-color)" strokeMiterlimit="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.3147 0.5V4.8484" stroke="var(--primary-color)" strokeMiterlimit="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
};

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
                <filter id="filter0_g_265_6500" x="0" y="0" width="109" height="109" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feTurbulence type="fractalNoise" baseFrequency="0.4166666567325592 0.4166666567325592" numOctaves="3" seed="6224" />
                    <feDisplacementMap in="shape" scale="45" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
                    <feMerge result="effect1_texture_265_6500">
                    <feMergeNode in="displacedImage"/>
                    </feMerge>
                </filter>
                <filter id="filter1_g_265_6500" x="18" y="18" width="73" height="73" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
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
            icon: <IconToast />,
            description: 'Ceremonia'
        },
        {
            time: '5:00 pm',
            icon: <IconToast />,
            description: 'Brindis'
        },
        {
            time: '5:30 pm',
            icon: <IconToast />,
            description: 'Fotografía'
        },
        {
            time: '6:00 pm',
            icon: <IconToast />,
            description: 'Cena'
        },
        {
            time: '7:30 pm',
            icon: <IconToast />,
            description: 'Celebración'
        },
        {
            time: '11:00 pm',
            icon: <IconToast />,
            description: 'Felices para siempre'
        }
    ];

    return (
        <section className="section itinerary">
            <div className="section__container itinerary__container">
                <header className="itinerary__head">
                    <h3 className="itinerary__title">Itinerario</h3>
                </header>

                <ul className="itinerary__list">
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
                </ul>
            </div>
        </section>
    );
};

export default Itinerary;