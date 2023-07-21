import { useTheme } from '../../hooks/theme';

import styles from './footer.module.scss';

const Footer = () => {
    const { isDarkTheme } = useTheme();
    return (
        <footer className={`${styles.container} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div className={styles.content}>
                <h1 className={styles.title}>LF</h1>
                <a className={styles.subtitle} href="mailto:luizfilipe.tech@gmail.com">luizfilipe.tech@gmail.com</a>
            </div>
        </footer>
    );
}

export default Footer;
