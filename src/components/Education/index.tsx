import { useTheme } from "../../hooks/theme";

import InstitutionCard from "../InstitutionCard";

import styles from "./education.module.scss";

const Education = () => {

    const { isDarkTheme } = useTheme();

    return (

        <section
            id="education"
            className={`${styles.container} ${
                isDarkTheme ? styles.dark : styles.light
            }`}
        >

            <div className={styles.content}>

                <span className={styles.badge}>
                    Formação
                </span>

                <h2 className={styles.title}>
                    Formação Acadêmica
                </h2>

                <p className={styles.subtitle}>
                    Graduação e formação voltadas ao desenvolvimento de software,
                    arquitetura de sistemas e engenharia de aplicações.
                </p>

                <div className={styles.timeline}>

                    <InstitutionCard
                        company="Uniasselvi"
                        client="Bacharelado em Engenharia de Software"
                        role="Graduação"
                        location="Cabo Frio, RJ"
                        startAt="Fev 2023"
                        endAt="Fev 2027"
                        type="Ensino Superior"
                        technologies={[
                            "Engenharia de Software",
                            "Arquitetura",
                            "Banco de Dados",
                            "POO"
                        ]}
                        description="Formação focada em desenvolvimento de software, arquitetura de sistemas, banco de dados, engenharia de requisitos e boas práticas de desenvolvimento."
                    />

                </div>

            </div>

        </section>

    );

};

export default Education;