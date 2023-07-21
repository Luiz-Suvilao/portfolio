import { RefObject } from 'react';

import { useTheme } from '../../hooks/theme';

import ProjectCard from '../ProjectCard';

import { projects } from '../../data/projects';

import styles from './projects.module.scss';

const Projects = ({
    projectsRef
}: {
    projectsRef: RefObject<HTMLDivElement>
}) => {
    const { isDarkTheme } = useTheme();
    return (
        <section className={`${styles.container} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div ref={projectsRef} className={styles.content}>
                <h1  className={styles.title}>Meus projetos</h1>
                <h3 className={styles.subtitle}>Coisas que construí até agora</h3>

                <div className={styles.projects}>
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            linkCodeView={project.linkCodeView}
                            linkView={project.linkView}
                            imagePreview={project.imagePreview}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
