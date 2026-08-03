import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt
} from "react-icons/fa";

import { useTheme } from "../../hooks/theme";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import Input from "../../components/Input";

import favicon from "../../public/favicon.ico";

import styles from "./contact.module.scss";

const Contato = () => {

    const { isDarkTheme } = useTheme();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [success, setSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit() {

        if (!name || !email || !message) {
            alert("Preencha todos os campos.");
            return;
        }

        setIsSubmitting(true);

        try {

            const response = await fetch("/api/email/sendMessage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            });

            if (!response.ok) {
                throw new Error();
            }

            setSuccess(true);

            setName("");
            setEmail("");
            setMessage("");

            setTimeout(() => {

                setSuccess(false);

            }, 5000);

        } catch {

            alert("Não foi possível enviar sua mensagem.");

        } finally {

            setIsSubmitting(false);

        }

    }

    return (
        <>
            <Head>
                <title>Contato | Luiz Filipe</title>
                <link
                    rel="shortcut icon"
                    href={favicon.src}
                    type="image/x-icon"
                />
            </Head>

            <Header contactView />

            <section
                className={`${styles.container} ${
                    isDarkTheme ? styles.dark : styles.light
                }`}
            >

                <div className={styles.content}>

                    <aside className={styles.left}>

                        <span className={styles.badge}>
                            Disponível para oportunidades
                        </span>

                        <h1>
                            Vamos conversar.
                        </h1>

                        <p>
                            Estou disponível para oportunidades,
                            freelas e novos desafios.
                            Se você tem um projeto ou deseja
                            conversar sobre tecnologia, entre
                            em contato.
                        </p>

                        <div className={styles.info}>

                            <a href="mailto:luizfilipe.tech@gmail.com">

                                <FaEnvelope />

                                luizfilipe.tech@gmail.com

                            </a>

                            <span>

                                <FaMapMarkerAlt />

                                Rio de Janeiro • Brasil

                            </span>

                        </div>

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

                    </aside>

                    <div className={styles.formCard}>

                        {success && (
                            <div className={styles.success}>
                                Mensagem enviada com sucesso 🚀
                            </div>
                        )}

                        <Input
                            label="Nome"
                            placeholder="Seu nome"
                            type="text"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                        />

                        <Input
                            label="Email"
                            placeholder="Seu email"
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />

                        <label className={styles.label}>
                            Mensagem
                        </label>

                        <textarea
                            placeholder="Conte um pouco sobre seu projeto..."
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
                        />

                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >

                            {isSubmitting ? (
                                <Loader />
                            ) : (
                                "Enviar mensagem"
                            )}

                        </button>

                    </div>

                </div>

            </section>

            <Footer />

        </>
    );

};

export default Contato;