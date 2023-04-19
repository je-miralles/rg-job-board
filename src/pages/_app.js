import '@/styles/globals.css';
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }) {

  return (
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
  )
}
