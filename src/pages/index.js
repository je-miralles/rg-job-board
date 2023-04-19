import Head from 'next/head';
import { Group } from "@mantine/core";

import LandingPage from './LandingPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>ListingBoard</title>
        <meta name="description" content="A board of listings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </>
  )
}
