import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useTheme } from "../../hooks/theme";

import { projects } from "../../data/projects";

import ProjectCard from "../ProjectCard";

import styles from "./projects.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({sectionRef}: any) => {

    const { isDarkTheme } = useTheme();

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(`.${styles.project}`, {

                opacity: 0,
                y: 80,

                duration: .8,

                stagger: .15,

                ease: "power3.out",

                scrollTrigger: {

                    trigger: sectionRef.current,

                    start: "top 70%"

                }

            });

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (

        <section
            id="projects"
            ref={sectionRef}
            className={`${styles.container} ${
                isDarkTheme ? styles.dark : styles.light
            }`}
        >

            <div className={styles.content}>

                <span className={styles.badge}>
                    Projetos
                </span>

                <h2 className={styles.title}>
                    Alguns trabalhos que desenvolvi
                </h2>

                <p className={styles.subtitle}>
                    Projetos profissionais, freelances e aplicações pessoais
                    desenvolvidas com foco em performance, experiência do usuário
                    e código limpo.
                </p>

                <div className={styles.grid}>

                    {projects.map((project) => (

                        <div
                            key={project.id}
                            className={`${styles.project} ${
                                project.featured ? styles.featured : ""
                            }`}
                        >

                            <ProjectCard
                                project={project}
                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default Projects;