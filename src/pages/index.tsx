import Head from 'next/head';

import Header from '../components/Header';
import Main from '../components/Main';

const Home = () => (
    <>
        <Head>
            <title>Portfolio</title>
        </Head>

        <Header />

        <Main />
    </>
);

export default Home;
