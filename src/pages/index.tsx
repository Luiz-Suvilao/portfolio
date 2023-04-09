import Head from 'next/head';

import { useTheme } from '../hooks/theme';

import Header from '../components/Header';
import Main from '../components/Main';

const Home = () => {
    const { isDarkTheme } = useTheme();

    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Header isDarkTheme={isDarkTheme} />

            <Main isDarkTheme={isDarkTheme} />
        </>
    );
}

export default Home;
