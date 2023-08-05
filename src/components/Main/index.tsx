import { useTheme } from '../../hooks/theme';

import styles from './main.module.scss';

const Main = () => {
    const { isDarkTheme } = useTheme();
    return (
        <>
            <main className={`${styles.container} ${isDarkTheme ? styles.dark : styles.light}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Olá, meu nome é <span>Luiz Filipe</span> e sou um artesão da web.</h1>
                    <div className={styles.box}>
                        <div className={styles.me}/>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;
