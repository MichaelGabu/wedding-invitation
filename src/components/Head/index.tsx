import React from 'react';
import './head.sass';

interface HeadProps {
    title: string;
    subtitle: string;
}

const Head: React.FC<HeadProps> = ({ title, subtitle }) => {
    return (
        <header className="section head">
            <div className="section__container">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        </header>
    );
};

export default Head;