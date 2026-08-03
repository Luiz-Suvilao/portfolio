import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>

                {/* SEO */}

                <meta charSet="UTF-8" />

                <meta
                    name="description"
                    content="Portfólio de Luiz Filipe, Desenvolvedor Full Stack especializado em React, Angular, Laravel, .NET e desenvolvimento de aplicações web modernas."
                />

                <meta
                    name="keywords"
                    content="
                        Luiz Filipe,
                        Full Stack,
                        React,
                        Angular,
                        Laravel,
                        .NET,
                        PHP,
                        C#,
                        Next.js,
                        Desenvolvedor,
                        Programador,
                        Portfolio
                    "
                />

                <meta
                    name="author"
                    content="Luiz Filipe"
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <meta
                    name="theme-color"
                    content="#191919"
                />

                {/* Open Graph */}

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:title"
                    content="Luiz Filipe | Full Stack Developer"
                />

                <meta
                    property="og:description"
                    content="Portfólio de Luiz Filipe, desenvolvedor Full Stack especializado em React, Angular, Laravel e .NET."
                />

                <meta
                    property="og:image"
                    content="/preview.png"
                />

                <meta
                    property="og:locale"
                    content="pt_BR"
                />

                <meta
                    property="og:site_name"
                    content="Luiz Filipe"
                />

                {/* Favicons */}

                <link
                    rel="icon"
                    href="/favicon.ico"
                />

                <link
                    rel="apple-touch-icon"
                    href="/favicon.ico"
                />

                {/* Google Analytics */}

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

                        function gtag(){
                            dataLayer.push(arguments);
                        }

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
    );
}