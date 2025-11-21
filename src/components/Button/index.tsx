import React from 'react';
import { Icon } from '@iconify-icon/react';
import './button.sass';

interface ButtonProps {
    label: string;
    icon?: string;
    color?: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, icon, color = 'default', onClick }) => {
    return (
        <button className={`button button--color-${color}`} onClick={onClick}>
            {icon && <Icon icon={icon} />}
            <span className="button__text">{label}</span>
        </button>
    );
};

export default Button;
