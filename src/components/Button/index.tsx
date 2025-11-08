import React from 'react';
import { Icon } from '@iconify-icon/react';
import './button.sass';

interface ButtonProps {
    label: string;
    icon?: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, icon, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            {icon && <Icon icon={icon} />}
            <span className="button__text">{label}</span>
        </button>
    );
};

export default Button;
