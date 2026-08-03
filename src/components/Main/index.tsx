import React, { useEffect, useRef } from "react";
import Link from "next/link";

import { gsap } from "gsap";

import { useTheme } from "../../hooks/theme";

import styles from "./main.module.scss";

interface MainProps {
    projectsRef: React.RefObject<HTMLDivElement>;
}

const Main = ({ projectsRef }: MainProps) => {

    const { isDarkTheme } = useTheme();

    const hero = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(`.${styles.badge}`, {
                y: 30,
                opacity: 0,
                duration: .6
            });

            gsap.from(`.${styles.title}`, {
                y: 40,
                opacity: 0,
                duration: .8,
                delay: .2
            });

            gsap.from(`.${styles.subtitle}`, {
                y: 40,
                opacity: 0,
                duration: .8,
                delay: .35
            });

            gsap.from(`.${styles.actions}`, {
                y: 40,
                opacity: 0,
                duration: .8,
                delay: .5
            });

            gsap.from(`.${styles.stackList}`, {
                y: 30,
                opacity: 0,
                duration: .8,
                delay: .7
            });

            gsap.from(`.${styles.photoContainer}`, {
                x: 80,
                opacity: 0,
                duration: 1
            });

        }, hero);

        return () => ctx.revert();

    }, []);

    return (
        <main
            ref={hero}
            className={`${styles.container} ${
                isDarkTheme ? styles.dark : styles.light
            }`}
        >
            <div className={styles.content}>

                <section className={styles.left}>

                    <span className={styles.badge}>
                        👋 Olá, eu sou
                    </span>

                    <h1 className={styles.title}>
                        Luiz Filipe
                    </h1>

                    <h2 className={styles.subtitle}>
                        Full Stack Developer
                    </h2>

                    <p className={styles.description}>
                        Desenvolvendo aplicações modernas,
                        performáticas e escaláveis utilizando
                        React, Angular, Laravel e .NET.
                    </p>

                    <div className={styles.actions}>

                        <button
                            onClick={() =>
                                projectsRef.current?.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }
                        >
                            Ver Projetos
                        </button>

                        {/*<Link href="/curriculo.pdf" target="_blank">*/}
                        {/*    Download CV*/}
                        {/*</Link>*/}

                    </div>

                    <div className={styles.stackList}>
                        <span>React</span>
                        <span>Angular</span>
                        <span>Laravel</span>
                        <span>.NET</span>
                        <span>Docker</span>
                    </div>

                </section>

                <section className={styles.photoContainer}>

                    <div className={styles.glow}></div>

                    <div className={styles.photo}></div>

                </section>

            </div>

        </main>
    );
};

export default Main;