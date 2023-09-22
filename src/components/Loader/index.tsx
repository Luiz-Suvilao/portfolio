import styles from './loader.module.scss';
import {useTheme} from "../../hooks/theme";

const Loader = () => {
    const { isDarkTheme } = useTheme();

    return (
        <div className={`${styles.loader} ${isDarkTheme ? styles.dark : styles.light}`}></div>
    );
}

export default Loader;