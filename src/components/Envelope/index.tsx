import React from 'react';
import './envelope.sass';
import stamp from '../../assets/images/stamp.webp';
import Button from '../Button';

interface EnvelopeProps {
    guestName: string;
    guestSeats: number;
    onClick: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ guestName, guestSeats, onClick }) => {
    return (
        <div className="envelope">
            <section className="envelope__top">
                <div className="envelope__top-container">
                    {/* <h2 className="envelope__title">Nuestra Boda</h2> */}
                    <span className="envelope__subtitle">Invitación para:</span>
                    <h3 className="envelope__guest-name">{guestName}</h3>
                </div>
                <img src={stamp} alt="Sello" loading="eager" className="envelope__stamp" />
            </section>
            <section className="envelope__bottom">
                <div className="envelope__bottom-flip"></div>
                <div className="envelope__bottom-flip-lateral"></div>
                <div className="envelope__bottom-container">
                    <div className="envelope__seats">
                        <h3 className="envelope__seats-title">Hemos reservado</h3>
                        <div className="envelope__seats-number">
                            <svg className="envelope__seats-number-highlight" width="62" height="57" viewBox="0 0 62 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M61 17.4061C61 8.34572 53.7637 1 44.8363 1C38.9579 1 33.8295 4.19372 31 8.95467C28.1705 4.19533 23.0421 1 17.1637 1C8.23632 1.0016 1 8.34572 1 17.4061C1 19.4765 1.39474 21.4507 2.08474 23.2743C7.42947 38.8776 31 56 31 56C31 56 54.5705 38.8776 59.9168 23.2743C60.6068 21.4507 61 19.4765 61 17.4061Z" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <strong>{guestSeats}</strong>
                        </div>
                        <p className="envelope__seats-text">Lugares en tu honor</p>
                    </div>

                    <Button label="Ver invitación" onClick={onClick} />
                </div>
            </section>
        </div>
    );
};

export default Envelope;