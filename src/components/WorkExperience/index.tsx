import InstitutionCard from '../InstitutionCard';

import styles from './workExperince.module.scss';

const WorkExperience = ({
    isDarkTheme,
}: {
    isDarkTheme: boolean
}) => (
    <section className={`${styles.container} ${isDarkTheme ? styles.dark : styles.light}`}>
        <div className={styles.content}>
            <h1 className={styles.title}>Experiência de trabalho</h1>

            <div className={styles.jobs}>
                <InstitutionCard
                    isDarkTheme={isDarkTheme}
                    foundation="Infobase IT"
                    locale="RJ, Brasil"
                    startAt="Abr 2020"
                    terminateAt="Atual"
                    period="full-time"
                    title="Full Stack Developer"
                />
            </div>
        </div>
    </section>
);

export default WorkExperience;
