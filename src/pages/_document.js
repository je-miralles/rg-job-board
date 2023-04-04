// import { Html, Head, Main, NextScript } from 'next/document'

import Document from "next/document";
import { createGetInitialProps } from "@mantine/next";

const getInitialProps = createGetInitialProps();
export default class _Document extends Document {
    static getInitialProps = getInitialProps;
}

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }