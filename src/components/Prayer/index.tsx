import React from 'react';
import './prayer.sass';

interface PrayerProps {
    prayer: string;
}

const Prayer: React.FC<PrayerProps> = ({ prayer }) => {
    return (
        <section className="section prayer">
            <div className="section__container">
                <div dangerouslySetInnerHTML={{ __html: prayer }} />
            </div>
        </section>
    );
};

export default Prayer;