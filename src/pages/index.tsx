import { useRef } from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Main from '../components/Main';
import Stacks from '../components/Stacks';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

import favicon from '../public/favicon.ico';

const Home = () => {
    const projectsRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Head>
                <title>Portfolio | Luiz Filipe</title>
                <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
            </Head>

            <Header
                projectsRef={projectsRef}
                aboutRef={aboutRef}
            />

            <Main
                projectsRef={projectsRef}
            />

            <Stacks />

            <Projects sectionRef={projectsRef} />

            <AboutMe
                sectionRef={aboutRef}
            />

            <WorkExperience />

            <Education />

            <Footer />

            <ScrollToTopButton />
        </>
    );
}

export default Home;
