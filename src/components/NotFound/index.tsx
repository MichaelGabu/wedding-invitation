import React from 'react';
import './notfound.sass';

const NotFound: React.FC = () => {
    return (
        <section className="notFound section">
            <div className="section__container notFound__container">
                <h2 className="notFound__title">Invitación no encontrada</h2>
                <p className="notFound__text">Por favor, verifica que el enlace que has utilizado es correcto.</p>
            </div>
        </section>
    );
};

export default NotFound;