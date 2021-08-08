import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import ProductsSection from "../components/Products/ProductsSection";
import fetcher from "../utils/fetcher";

export default function Home({ data }) {
  const productSectionData = [
    {
      title: "top sales",
      path: "/products",
      color: "black",
      // bg: "red.500",
    },
    {
      title: "top cheap",
      path: "/products",
      color: "black",
    },
    {
      title: "deals of the day",
      path: "/products",
      color: "black",
      // bg: "teal.500",
    },
    {
      title: "most searched",
      path: "/products",
      color: "black",
      // bg: "red.500",
    },
  ];

  return (
    <>
      <Head>
        <title>Deal Vend | Home</title>
      </Head>

      <Layout showHeaderCenter breadcrumbPaths={null}>
        <Box>
          {data.map(({ data }, index) =>
            data.products.length ? (
              <ProductsSection
                data={{ ...productSectionData[index], ...data }}
                key={index}
              />
            ) : null
          )}
        </Box>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  let data = await Promise.all([
    fetcher("/products/top-sales"),
    fetcher("/products/top-cheap"),
    fetcher("/products/deals-of-the-day"),
    fetcher("/products/most-searched"),
  ]);

  return {
    props: {
      data,
    },
  };
};
