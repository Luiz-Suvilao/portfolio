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
                        Desenvolvedor com foco em backend, integrações e produtos web.
                    </h2>

                    <p className={styles.description}>
                        Trabalho com desenvolvimento web há mais de 6 anos,
                        construindo e mantendo aplicações em produção. Tenho
                        experiência com desenvolvimento e integração de APIs REST,
                        regras de negócio e interfaces utilizando Laravel, .NET,
                        React e Angular. Também desenvolvo projetos pessoais
                        com Python.

                        <br /><br />

                        Também trabalho com Docker e Git no fluxo diário. Valorizo
                        código sustentável, boas práticas de engenharia e soluções
                        que atendam necessidades reais do negócio.
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
