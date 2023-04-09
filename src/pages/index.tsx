import Head from 'next/head';

import { useTheme } from '../hooks/theme';

import Header from '../components/Header';
import Main from '../components/Main';
import Stacks from "../components/Stacks";
import Projects from "../components/Projects";

const Home = () => {
    const { isDarkTheme } = useTheme();

    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Header isDarkTheme={isDarkTheme} />

            <Main isDarkTheme={isDarkTheme} />

            <Stacks isDarkTheme={isDarkTheme} />

            <Projects isDarkTheme={isDarkTheme} />
        </>
    );
}

export default Home;
