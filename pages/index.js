import Head from "next/head";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box as="a" href="/sd">
          sd
        </Box>
      </main>

      <footer></footer>
    </>
  );
}
