import styles from './education.module.scss';
import InstitutionCard from "../InstitutionCard";

const Education = ({
    isDarkTheme
}: {
    isDarkTheme: boolean
}) => (
    <section className={`${styles.container} ${isDarkTheme ? styles.dark : styles.light}`}>
        <div className={styles.content}>
            <h1 className={styles.title}>Escolaridade</h1>

            <div className={styles.educations}>
                <InstitutionCard
                    isDarkTheme={isDarkTheme}
                    foundation="Uniasselvi"
                    locale="CF, RJ"
                    startAt="Fev 2023"
                    terminateAt="Fev 2027"
                    title="Bacharelado Eng. de Software"
                />
            </div>
        </div>
    </section>
);

export default Education;
