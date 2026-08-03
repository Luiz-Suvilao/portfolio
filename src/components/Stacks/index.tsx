import { useEffect, useRef } from "react";

import { gsap } from "gsap";

import { useTheme } from "../../hooks/theme";

import { techs } from "../../data/techs";

import styles from "./Stacks.module.scss";

const Stacks = () => {

    const { isDarkTheme } = useTheme();

    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(`.${styles.card}`, {

                y: 50,
                opacity: 0,

                duration: .7,

                stagger: .08,

                ease: "power3.out",

                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }

            });

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (

        <section
            ref={sectionRef}
            className={`${styles.container} ${
                isDarkTheme ? styles.dark : styles.light
            }`}
        >

            <div className={styles.content}>

                <span className={styles.badge}>
                    Tecnologias
                </span>

                <h2 className={styles.title}>
                    Minha Stack
                </h2>

                <p className={styles.subtitle}>
                    Tecnologias que utilizo diariamente para construir
                    aplicações escaláveis, performáticas e modernas.
                </p>

                <div className={styles.grid}>

                    {techs.map((tech) => {

                        const Icon = tech.icon;

                        return (

                            <div
                                key={tech.id}
                                className={styles.card}
                                style={{
                                    ["--tech-color" as any]: tech.color,
                                }}
                            >

                                <Icon
                                    className={styles.icon}
                                />

                                <h3>
                                    {tech.name}
                                </h3>

                                <span>
                                    {tech.category}
                                </span>

                                <small>
                                    {tech.experience}
                                </small>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

};

export default Stacks;