import React, { useState } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: React.HTMLInputTypeAttribute;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  type = 'text',
  label,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={styles.inputContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={styles.inputField}
        aria-label={label || placeholder}
      />
    </div>
  );
};

export default Input;