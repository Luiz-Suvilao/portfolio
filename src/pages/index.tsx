import { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { useTheme } from '../hooks/theme';

import Header from '../components/Header';
import Main from '../components/Main';
import Stacks from '../components/Stacks';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import SwitchTheme from '../components/SwitchTheme';

import favicon from '../public/favicon.ico';

const Home = () => {
    const projectsRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    const listItem = [
        <span onClick={() => projectsRef.current.scrollIntoView({behavior: 'smooth'})} key={1}>
            Projetos
        </span>,
        <span onClick={() => aboutRef.current.scrollIntoView({behavior: 'smooth'})} key={2}>
            Sobre
        </span>,
        <Link href="/contato" key={3}>
            Contato
        </Link>,
        <Link target="_blank" href="https://github.com/Luiz-Suvilao" key={4}>
            <FaGithub />
        </Link>,
        <Link target="_blank" href="https://www.linkedin.com/in/luiz-filipe-da-silva-de-jesus-490a02182/" key={5}>
            <FaLinkedin />
        </Link>,
        <SwitchTheme key={6}/>
    ];

    return (
        <>
            <Head>
                <title>Portfolio | Luiz Filipe</title>
                <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
            </Head>

            <Header
                listItem={listItem}
            />

            <Main />

            <Stacks />

            <Projects
                projectsRef={projectsRef}
            />

            <AboutMe
                aboutRef={aboutRef}
            />

            <WorkExperience />

            <Education />

            <Footer />

            <ScrollToTopButton />
        </>
    );
}

export default Home;
