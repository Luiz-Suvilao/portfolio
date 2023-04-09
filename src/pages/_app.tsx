import { ThemeProviderWrapper } from '../hooks/theme';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProviderWrapper>
        <Component {...pageProps} />
      </ThemeProviderWrapper>
  )
}

export default MyApp
