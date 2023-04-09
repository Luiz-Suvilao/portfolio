import { useTheme } from '../../hooks/theme';

import styles from './SwitchTheme.module.scss'

const SwitchTheme = () => {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <>
            <label className={styles.toggleSwitch}>
                <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
                <span className={styles.switch} />
            </label>
        </>
    );
}

export default SwitchTheme;
