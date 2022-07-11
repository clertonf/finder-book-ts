import React, { useEffect, useState } from "react";
import {
  Heebo_300Light,
  Heebo_400Regular,
  Heebo_500Medium,
} from "@expo-google-fonts/heebo";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";

import store from "./src/store";
import theme from "./src/styles/theme";
import { BookDetails } from "./src/screens/BookDetails";
import { Routes } from "./src/routes";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          Heebo_300Light,
          Heebo_400Regular,
          Heebo_500Medium,
        });

        await new Promise((resolve) => setTimeout(resolve, 200));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    // <Provider store={store}>
    <>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
    // </Provider>
  );
}
