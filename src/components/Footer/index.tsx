import Link from "next/link";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";

import { useTheme } from "../../hooks/theme";

import styles from "./footer.module.scss";

const Footer = () => {

    const { isDarkTheme } = useTheme();

    return (

        <footer
            className={`${styles.container} ${
                isDarkTheme ? styles.dark : styles.light
            }`}
        >

            <div className={styles.content}>

                <div className={styles.left}>

                    <h2>
                        Vamos construir algo incrível?
                    </h2>

                    <p>
                        Estou disponível para novos desafios,
                        projetos e oportunidades.
                    </p>

                </div>

                <div className={styles.right}>

                    <a href="mailto:luizfilipe.tech@gmail.com">

                        <FaEnvelope />

                        luizfilipe.tech@gmail.com

                    </a>

                    <div className={styles.socials}>

                        <Link
                            href="https://github.com/Luiz-Suvilao"
                            target="_blank"
                        >

                            <FaGithub />

                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/luiz-filipe-da-silva-de-jesus-490a02182/"
                            target="_blank"
                        >

                            <FaLinkedin />

                        </Link>

                    </div>

                </div>

            </div>

            <div className={styles.bottom}>

                © {new Date().getFullYear()} Luiz Filipe.
                Desenvolvido com Next.js.

            </div>

        </footer>

    );

};

export default Footer;