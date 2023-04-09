import { useState } from 'react';

import { useTheme } from '../../hooks/theme';

import styles from './SwitchTheme.module.scss'

const SwitchTheme = () => {
    const { isDarkTheme, toggleTheme } = useTheme();
    const [isToggled, setIsToggled] = useState<boolean>(isDarkTheme);
    const onToggle = () => setIsToggled(!isToggled);

    return (
        <>
            <label className={styles.toggleSwitch}>
                <input type="checkbox" checked={isToggled} onChange={() => {
                    onToggle();
                    toggleTheme();
                }} />
                <span className={styles.switch} />
            </label>
        </>
    );
}

export default SwitchTheme;
