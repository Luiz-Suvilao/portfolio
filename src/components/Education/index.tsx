import { useTheme } from '../../hooks/theme';

import InstitutionCard from "../InstitutionCard";

import styles from './education.module.scss';

const Education = () => {
    const { isDarkTheme } = useTheme();
    return (
        <section className={`${styles.container} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div className={styles.content}>
                <h1 className={styles.title}>Escolaridade</h1>

                <div className={styles.educations}>
                    <InstitutionCard
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
}

export default Education;
