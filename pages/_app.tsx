import type { AppProps } from "next/app";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { useReducer, useMemo, useEffect } from "react";

import { useApiClient } from "src/api";
import { setFlightData, setLoading } from "src/store/actions";
import { appContextReducer, appContextInitialStates } from "src/store/reducer";
import GlobalStyle from "src/styles/globalStyles";
import { theme } from "src/styles/styledTheme";
import SeoHeadTags from "src/components/Head/SeoHeadTags";
import AppContextProvider from "src/store/provider";

import "react-toastify/dist/ReactToastify.css";
import FullPageLoader from "src/components/FullPageLoader";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { fetchFlights } = useApiClient();

  const [state, dispatch] = useReducer(
    appContextReducer,
    appContextInitialStates
  );

  const appContextProvider = useMemo(
    () => ({
      contextState: state,
      contextDispatch: dispatch,
    }),
    [state, dispatch]
  );

  const getFlightsData = async () => {
    dispatch(setLoading(true));
    const response = await fetchFlights();

    if (response) {
      dispatch(setFlightData(response));
    }

    dispatch(setLoading(false));
  };

  useEffect(() => {
    getFlightsData();
  }, []);

  if (state.loading) {
    return <FullPageLoader />;
  }

  return (
    <AppContextProvider value={appContextProvider}>
      <StyledThemeProvider theme={theme}>
        <SeoHeadTags
          pageTitle="Flight Challenge"
          description="Flight Challange Hello!"
        />
        <Component {...pageProps} />
        <ToastContainer />
        <GlobalStyle />
      </StyledThemeProvider>
    </AppContextProvider>
  );
};

export default MyApp;
