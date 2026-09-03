import Image from "next/image";
import Link from "next/link";

import { FaArrowRight, FaGithub } from "react-icons/fa";

import { useTheme } from "../../hooks/theme";

import styles from "./projectCard.module.scss";

export interface Project {

    id:number;

    featured:boolean;

    title:string;

    company:string;

    role:string;

    period:string;

    description:string;

    technologies:string[];

    website:string;

    github?:string | null;

    image:any;

}

interface Props{

    project:Project;

}

export default function ProjectCard({project}:Props){

    const {isDarkTheme}=useTheme();

    return(

        <article
            className={`${styles.card}
            ${isDarkTheme ? styles.dark : styles.light}`}
        >

            <div className={styles.imageContainer}>

                <Image
                    src={project.image}
                    alt={project.title}
                    className={styles.image}
                />

            </div>

            <div className={styles.content}>

                <div className={styles.header}>

                    <div>

                        <h3>

                            {project.title}

                        </h3>

                        <span>

                            {project.role}

                        </span>

                    </div>

                    <small>

                        {project.period}

                    </small>

                </div>

                <p>

                    {project.description}

                </p>

                <div className={styles.techs}>

                    {project.technologies.map((tech)=>(

                        <span key={tech}>

                            {tech}

                        </span>

                    ))}

                </div>

                <div className={styles.footer}>

                    <Link
                        href={project.website}
                        target="_blank"
                    >

                        Visitar

                        <FaArrowRight/>

                    </Link>

                    {

                        project.github && (

                            <Link
                                href={project.github}
                                target="_blank"
                            >

                                <FaGithub/>

                            </Link>

                        )

                    }

                </div>

            </div>

        </article>

    );

}