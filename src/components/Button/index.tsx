import React from 'react';
import { Icon } from '@iconify-icon/react';
import './button.sass';

interface ButtonProps {
    label: string;
    icon?: string;
    color?: string;
    type?: string;
    className?: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, icon, color = 'default', type = 'default', className = '', onClick }) => {
    return (
        <button className={`button button--color-${color} button--type-${type} ${className} ${!label ? 'button--icon' : ''}`} onClick={onClick}>
            {icon && <Icon icon={icon} />}
            {label && <span className="button__text">{label}</span>}
        </button>
    );
};

export default Button;
