import Link from 'next/link';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import SwitchTheme from '../SwitchTheme';

import styles from './header.module.scss';

const Header = ({
    isDarkTheme
}: {
    isDarkTheme: boolean
}) => {
    return (
        <header className={`${styles.container} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div className={styles.content}>
                <h1 className={styles.title}>LF</h1>

                <nav>
                    <ul className={styles.linkList}>
                        <li>
                            <Link href="#">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Tecnologias
                            </Link>
                        </li>

                        <li>
                            <Link target="_blank" href="https://github.com/Luiz-Suvilao">
                                <FaGithub />
                            </Link>
                        </li>

                        <li>
                            <Link target="_blank" href="https://www.linkedin.com/in/luiz-filipe-da-silva-de-jesus-490a02182/">
                                <FaLinkedin />
                            </Link>
                        </li>

                        <li>
                            <SwitchTheme />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
