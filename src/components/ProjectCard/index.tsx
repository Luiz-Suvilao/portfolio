import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { FaGithub, FaLink } from 'react-icons/fa';

import { useTheme } from '../../hooks/theme';

import styles from './projectCard.module.scss';

interface ProjectCardProps {
    title: string;
    description: string;
    linkView: string;
    linkCodeView: string;
    imagePreview: StaticImageData
}

const ProjectCard = ({
    title,
    description,
    linkView,
    linkCodeView,
    imagePreview
}: ProjectCardProps) => {
    const { isDarkTheme } = useTheme();
    return (
        <div className={`${styles.project} ${isDarkTheme ? styles.dark : styles.light}`}>
            <Image src={imagePreview}   alt="site preview" />

            <div className={styles.cardContent}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>

                <div className={styles.cta}>
                    <Link target="_blank" href={linkView}>
                        <FaLink  />
                        Ver site
                    </Link>

                    <Link target="_blank" href={linkCodeView}>
                        <FaGithub  />
                        Ver código
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
