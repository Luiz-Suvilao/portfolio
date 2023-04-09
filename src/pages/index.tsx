import Head from 'next/head';

import { useTheme } from '../hooks/theme';

import Header from '../components/Header';
import Main from '../components/Main';
import Stacks from "../components/Stacks";

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
        </>
    );
}

export default Home;
