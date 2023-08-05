import { useTheme } from '../../hooks/theme';

export interface InputProps {
    label: string;
    placeholder: string;
    value?: string;
    type?: 'text' | 'email' | 'checkbox' | 'button' | 'color' | 'date' | 'datetime-local' | 'file' | 'hidden';
    customClass?: string;
    required?: boolean;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

import styles from './input.module.scss';
import React from "react";

const Input = (props: InputProps) => {
    const { isDarkTheme } = useTheme();

    return (
        <div className={styles.container}>
            <input
                className={`${props.customClass ?? ''} ${styles.input} ${isDarkTheme ? styles.dark : styles.light}`}
                {...props}
                onChange={props.onChange}
            />
            <span className={styles.bar} />
        </div>
    )
}

export default Input;