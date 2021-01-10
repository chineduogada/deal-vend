import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import ProductsSection from "../components/Products/ProductsSection";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Deal Vend | Home</title>
      </Head>

      <Layout showHeaderCenter breadcrumbPaths={null}>
        <Box>
          <ProductsSection
            path="/products"
            limit={3}
            title="Top sales"
            bg="red.500"
          />
          <ProductsSection
            path="/products"
            limit={3}
            title="Deal of the day"
            color="black"
          />
          <ProductsSection
            path="/products"
            limit={3}
            title="Season sales"
            bg="teal.500"
          />
          <ProductsSection
            path="/products"
            limit={3}
            title="Most search products"
            bg="red.500"
          />
        </Box>
      </Layout>
    </>
  );
}
