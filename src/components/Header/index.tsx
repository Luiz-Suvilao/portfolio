import { useTheme } from '../../hooks/theme';

import styles from './header.module.scss';

const Header = ({
    listItem
}: {
    listItem: JSX.Element[]
}) => {
    const { isDarkTheme } = useTheme();
    return (
        <header className={`${styles.container} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div className={styles.content}>
                <h1 className={styles.title}>LF</h1>

                <nav>
                    <ul className={styles.linkList}>
                        {listItem.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;
