import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useTheme } from "../../hooks/theme";

import styles from "./aboutMe.module.scss";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = ({ sectionRef }) => {

    const { isDarkTheme } = useTheme();

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(`.${styles.left}`,{

                x:-80,
                opacity:0,
                duration:.8,

                scrollTrigger:{
                    trigger:sectionRef.current,
                    start:"top 70%"
                }

            });

            gsap.from(`.${styles.right}`,{

                x:80,
                opacity:0,
                duration:.8,

                scrollTrigger:{
                    trigger:sectionRef.current,
                    start:"top 70%"
                }

            });

        });

        return ()=>ctx.revert();

    },[sectionRef]);

    return (

        <section
            id="about"
            ref={sectionRef}
            className={`${styles.container} ${
                isDarkTheme ? styles.dark : styles.light
            }`}
        >

            <div className={styles.content}>

                <div className={styles.left}>

                    <span className={styles.badge}>
                        Sobre mim
                    </span>

                    <h2 className={styles.title}>
                        Desenvolvedor Full Stack apaixonado por criar soluções.
                    </h2>

                    <p className={styles.description}>
                        Trabalho com desenvolvimento web há mais de 6 anos,
                        construindo aplicações completas desde APIs robustas
                        até interfaces modernas utilizando React, Angular,
                        Laravel e .NET.

                        <br /><br />

                        Gosto de escrever código limpo, buscar boas práticas,
                        resolver problemas complexos e criar produtos que
                        realmente entreguem valor ao usuário.
                    </p>

                </div>

                <div className={styles.right}>

                    <div className={styles.infoCard}>
                        <strong>6+</strong>
                        <span>Anos de experiência</span>
                    </div>

                    <div className={styles.infoCard}>
                        <strong>20+</strong>
                        <span>Projetos desenvolvidos</span>
                    </div>

                    <div className={styles.infoCard}>
                        <strong>Full Stack</strong>
                        <span>React • Angular • Laravel • .NET</span>
                    </div>

                </div>

            </div>

        </section>

    );

}

export default AboutMe;