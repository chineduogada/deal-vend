import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box as="a" href="/sd">
          sd
        </Box>
      </Layout>
    </>
  );
}
