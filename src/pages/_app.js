import Head from 'next/head';
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Bay Area RG Job Board</title>
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
          // globalStyles: (theme) => ({
          //   '*, *::before, *::after': {
          //     boxSizing: 'border-box',
          //   },
  
          //   body: {
          //     ...theme.fn.fontStyles(),
          //     backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          //     color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          //     lineHeight: theme.lineHeight,
          //   },
  
          //   '.your-class': {
          //     backgroundColor: 'red',
          //   },
  
          //   '#your-id > [data-active]': {
          //     backgroundColor: 'pink',
          //   },
          // }),
          // colors: {
          //   dark: [
          //     '#d5d7e0', // text ONLY IN DARK SCHEME
          //     '#acaebf',
          //     '#8c8fa3',
          //     '#666980',
          //     '#4d4f66',
          //     '#34354a',
          //     '#fab005', // Card ONLY IN DARK SCHEME
          //     '#2C2E33', // background ONLY IN DARK SCHEME
          //     '#0c0d21',
          //     '#01010a',
          //   ]
          // },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
