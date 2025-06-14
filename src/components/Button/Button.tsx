import React from 'react';
import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'success';

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  variant = 'primary',
}) => {
  const buttonClass = `${styles.button} ${styles[`button${variant.charAt(0).toUpperCase() + variant.slice(1)}`]}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;