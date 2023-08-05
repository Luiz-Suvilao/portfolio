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

    const listItem = [
        <Link target="_blank" href="https://github.com/Luiz-Suvilao" key={1}>
            <FaGithub />
        </Link>,
        <Link target="_blank" href="https://www.linkedin.com/in/luiz-filipe-da-silva-de-jesus-490a02182/" key={2}>
            <FaLinkedin />
        </Link>,
        <SwitchTheme key={3}/>
  ];

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

                      <button type="button">Enviar</button>
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