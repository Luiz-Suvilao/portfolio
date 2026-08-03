import { useTheme } from "../../hooks/theme";

import InstitutionCard from "../InstitutionCard";

import styles from './workExperince.module.scss';

const WorkExperience = () => {

    const { isDarkTheme } = useTheme();

    return (

        <section
            id="experience"
            className={`${styles.container} ${
                isDarkTheme ? styles.dark : styles.light
            }`}
        >

            <div className={styles.content}>

                <span className={styles.badge}>
                    Carreira
                </span>

                <h2 className={styles.title}>
                    Experiência Profissional
                </h2>

                <p className={styles.subtitle}>
                    Mais de 6 anos desenvolvendo aplicações web completas,
                    desde APIs até interfaces modernas para produtos em produção.
                </p>

                <div className={styles.timeline}>

                    <InstitutionCard
                        company="Infobase IT"
                        client="MAG Seguros"
                        role="Full Stack Developer"
                        location="Rio de Janeiro, Brasil"
                        startAt="Abr 2020"
                        endAt="Atual"
                        type="Tempo Integral"
                        technologies={[
                            "React",
                            "Angular",
                            "Laravel",
                            ".NET",
                            "SQL Server"
                        ]}
                        description="Desenvolvimento e manutenção dos canais digitais da MAG Seguros, implementando novas funcionalidades, integrações com APIs, melhorias de performance e correções em aplicações utilizadas diariamente por milhares de usuários."
                    />

                </div>

            </div>

        </section>

    );

};

export default WorkExperience;