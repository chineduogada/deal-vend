import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import ProductsSection from "../components/Products/ProductsSection";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout showCarousel>
        <Box>
          <ProductsSection path="/products" limit={3} />
        </Box>
      </Layout>
    </>
  );
}
