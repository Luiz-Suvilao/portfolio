import { RefObject } from 'react';

import {  useTheme } from '../../hooks/theme';

import styles from './aboutMe.module.scss';

const AboutMe = ({
    aboutRef
}: {
    aboutRef: RefObject<HTMLDivElement>
}) => {
    const { isDarkTheme } = useTheme();
    return (
        <section className={`${styles.container} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div ref={aboutRef} className={styles.content}>
                <h1 className={styles.title}>Sobre mim</h1>
                <p className={styles.subtitle}>
                    Bem, eu sou um entusiasta na programação, sempre disposto a aprender coisas novas.
                    Acredito que minha melhor definição seria: Um jovem programador em busca de conhecimento.
                </p>
            </div>
        </section>
    );
}

export default AboutMe;
