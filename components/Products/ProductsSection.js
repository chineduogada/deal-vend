import { Box, Heading } from "@chakra-ui/react";
import { Slider } from "react-rapid-carousel";
import BoxedCard from "./BoxedCard";
// import useSWR from "swr";

const ProductsSection = ({ data }) => {
  return (
    <Box
      as="section"
      shadow="md"
      rounded="md"
      overflow="hidden"
      pb={2}
      mb={8}
      bg="white"
    >
      <Box bg={data.bg} p={2} mb={2}>
        <Heading
          fontSize="lg"
          color={data.color || "white"}
          textTransform="capitalize"
        >
          {data.title}
        </Heading>
      </Box>
      {data && (
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
            <BoxedCard product={product} key={index} />
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default ProductsSection;
