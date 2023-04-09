import { RefObject } from 'react';
import Link from 'next/link';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import SwitchTheme from '../SwitchTheme';

import styles from './header.module.scss';

const Header = ({
    isDarkTheme,
    projectsRef,
    aboutRef
}: {
    isDarkTheme: boolean,
    projectsRef: RefObject<HTMLDivElement>,
    aboutRef: RefObject<HTMLDivElement>
}) => (
    <header className={`${styles.container} ${isDarkTheme ? styles.dark : styles.light}`}>
        <div className={styles.content}>
            <h1 className={styles.title}>LF</h1>

            <nav>
                <ul className={styles.linkList}>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>

                    <li>
                            <span  onClick={() => projectsRef.current.scrollIntoView({behavior: 'smooth'})}>
                                Projetos
                            </span>
                    </li>

                    <li>
                            <span onClick={() => aboutRef.current.scrollIntoView({behavior: 'smooth'})}>
                                Sobre
                            </span>
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

export default Header;
