import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Slider, ThemeProvider } from "react-rapid-carousel";
import { useEffect, useState } from "react";
import fetcher from "../../utils/fetcher";
import BoxedCard from "./BoxedCard";
// import useSWR from "swr";

const ProductsSection = ({ path, limit }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await fetcher(`${path}`);

      setData(data);
    };

    getProducts();
  }, []);

  return (
    <Box as="section">
      {data && (
        <ThemeProvider
          theme={{
            dots: { 1: "white", 2: "gray" },
            carets: { 1: "black", 2: "transparent" },
          }}
        >
          <Slider
            slidesToShow={2}
            quickSlide
            breakpoints={[
              { width: 280, slidesToShow: 1 },
              { width: 300, slidesToShow: 2 },
              { width: 540, slidesToShow: 3 },
              { width: 768, slidesToShow: 4 },
              { width: 900, slidesToShow: 5 },
            ]}
          >
            {data.products.map((product, index) => (
              <BoxedCard product={product}  key={index} />
            ))}
          </Slider>
        </ThemeProvider>
      )}
    </Box>
  );
};

export default ProductsSection;
