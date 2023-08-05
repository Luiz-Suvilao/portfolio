import Link from 'next/link';

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
                <Link className={styles.backToHome} href="/">
                    <h1 className={styles.title}>LF</h1>
                </Link>

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
