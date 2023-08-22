import type { AppProps } from "next/app";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import GlobalStyle from "src/styles/globalStyles";
import { theme } from "src/styles/styledTheme";
import SeoHeadTags from "src/components/Head/SeoHeadTags";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <SeoHeadTags
        pageTitle="Flight Challenge"
        description="Flight Challange Hello!"
      />
      <Component {...pageProps} />
      <GlobalStyle />
    </StyledThemeProvider>
  );
};

export default MyApp;
