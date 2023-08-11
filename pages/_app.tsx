import Layout from "@/components/Layout/Layout";
import { Context } from "@/hooks/context";
import { setupStore } from "@/redux/store";
import "@/styles/globals.css";
import "../styles/hamburger.css"
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import React from "react";

const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {

  const [sortProduct, setSortProduct] = React.useState("burger");

  return (
    <Context.Provider value={{sortProduct , setSortProduct}}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Context.Provider>
  );
}
