import Image from 'next/image';
import { techs } from '../../data/techs';

import { useTheme } from '../../hooks/theme';

import styles from './Stacks.module.scss';

const Stacks = () => {
    const { isDarkTheme } = useTheme();
    return (
        <section className={`${styles.container} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div className={styles.content}>
                <h1 className={styles.title}>Minhas habilidades</h1>
                <h3 className={styles.subtitle}>Tecnologias que eu trabalho</h3>

                <div className={styles.stacks}>
                    {techs.map(tech => (
                        <Image
                            key={tech.id}
                            src={tech.image}
                            alt={tech.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stacks;
