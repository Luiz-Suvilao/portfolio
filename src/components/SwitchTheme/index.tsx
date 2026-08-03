import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from "../../hooks/theme";

import styles from "./SwitchTheme.module.scss";

export default function SwitchTheme() {

    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <button
            className={styles.container}
            onClick={toggleTheme}
            aria-label="Alterar tema"
        >
            <div
                className={`${styles.thumb} ${
                    isDarkTheme ? styles.dark : styles.light
                }`}
            >
                {isDarkTheme ? <FiMoon /> : <FiSun />}
            </div>
        </button>
    );
}