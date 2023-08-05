import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { useTheme } from '../../hooks/theme';

import Header from '../../components/Header';
import SwitchTheme from '../../components/SwitchTheme';
import Footer from "../../components/Footer";
import Input from "../../components/Input";

import favicon from '../../public/favicon.ico';
import me from '../../public/me.jpg';

import styles from './contact.module.scss';

const Contato = () => {
    const { isDarkTheme } = useTheme();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [renderSuccessMessage, setRenderSuccessMessage] = useState(false);

    const listItem = [
        <Link target="_blank" href="https://github.com/Luiz-Suvilao" key={1}>
            <FaGithub />
        </Link>,
        <Link target="_blank" href="https://www.linkedin.com/in/luiz-filipe-da-silva-de-jesus-490a02182/" key={2}>
            <FaLinkedin />
        </Link>,
        <SwitchTheme key={3}/>
    ];

    const handleSubmit = async () => {
        if ([email, name, message].includes('')) {
            alert("Ooops! Verifique os campos e tente novamente :)");
            return;
        }

        const resp = await fetch('https://luizfilipe-portfolio.vercel.app/api/email/sendMessage', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                message,
                email
            })
        });

        if (resp.ok && resp.status === 200) {
            setEmail('');
            setMessage('');
            setName('');
            setRenderSuccessMessage(true);

            setTimeout(() => {
                setRenderSuccessMessage(false);
            }, 7000);
            return;
        }

        alert('Humm! Algo deu errado... Tente novamente mais tarde :/');
    }

    return (
        <>
            <Head>
                <title>Portfolio | Contato</title>
                <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
            </Head>

            <Header
                listItem={listItem}
            />

            <section className={`${styles.container} ${isDarkTheme ? styles.dark : styles.light}`}>
                <div className={styles.content}>
                    <form>
                        {renderSuccessMessage && (<p className={styles.success}>Mensagem enviada com sucesso!</p>)}
                        <h1 className={styles.title}>Fale comigo!</h1>
                        <Input
                            label="Seu nome"
                            placeholder="Seu nome"
                            type="text"
                            value={name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        />

                        <Input
                            label="Seu email"
                            placeholder="Seu email"
                            type="email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />

                        <textarea
                            placeholder="Digite sua mensagem..."
                            value={message}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                        />

                        <button onClick={() => handleSubmit()} type="button">Enviar</button>
                    </form>

                    <Image
                        src={me}
                        width={500}
                        height={500}
                        alt="Luiz Filipe segurando sua guitarra"
                        className={styles.photo}
                    />

                </div>
            </section>

            <Footer />
        </>
  );
};

export default Contato;