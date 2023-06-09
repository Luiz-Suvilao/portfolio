import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang='pt-BR'>
            <Head>
                <meta name="description" content="Meu site de apresentação pessoal." />
                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-QCJY3ESBBE"
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                >
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-QCJY3ESBBE');
                   `}
                </Script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
