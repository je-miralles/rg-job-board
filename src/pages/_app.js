import Head from 'next/head';
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>RG Job Board</title>
        <link rel="shortcut icon" href="favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          colors: {
            // 'body-background': '#F8F8F8', // Doesn't work
          }, }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
