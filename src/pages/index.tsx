import { useRef } from 'react';
import Head from 'next/head';

import { useTheme } from '../hooks/theme';

import Header from '../components/Header';
import Main from '../components/Main';
import Stacks from '../components/Stacks';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';

const Home = () => {
    const { isDarkTheme } = useTheme();
    const projectsRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Head>
                <title>Portfolio | Luiz Filipe</title>
            </Head>

            <Header
                projectsRef={projectsRef}
                aboutRef={aboutRef}
                isDarkTheme={isDarkTheme}
            />

            <Main isDarkTheme={isDarkTheme} />

            <Stacks isDarkTheme={isDarkTheme} />

            <Projects projectsRef={projectsRef} isDarkTheme={isDarkTheme} />

            <AboutMe aboutRef={aboutRef} isDarkTheme={isDarkTheme} />
        </>
    );
}

export default Home;
