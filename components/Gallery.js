import { Box, Flex } from "@chakra-ui/react";
import {
  Fader,
  ThemeProvider as FaderThemeProvider,
} from "react-rapid-carousel";
import { Image } from "./Image";

const Gallery = ({ product }) => {
  const allImages = product.images;
  // product.images.sort((image) => {
  //   return image.isPrimary ? -1 : 1;
  // }) || [];

  return (
    product && (
      <>
        {/* For Mobile */}
        <Box d={{ base: "block", md: "none" }} w="100%">
          <FaderThemeProvider
            theme={{
              dots: { 1: "#3182ce", 2: "#eee" },
              carets: { 1: "#3182ce", 2: "#eee" },
            }}
          >
            <Fader dots buttons>
              {allImages.map((image, index) => (
                <Flex justifyContent="center" key={index}>
                  <Image
                    w="280px"
                    h="230px"
                    isProduct
                    // src={image.imageUrl}
                    src={image}
                  />
                </Flex>
              ))}
            </Fader>
          </FaderThemeProvider>
        </Box>

        {/* From Tab */}
        <Box d={{ base: "none", md: "block" }}>
          <Image
            w="250px"
            h="200px"
            isProduct
            src={
              // product.primaryImage?.imageUrl || "/images/products/default.png"
              product.images[0]
            }
          />

          {product.images.length ? (
            <Flex overflowX="auto" w="250px" py={2}>
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  w="100px"
                  h="100px"
                  isProduct
                  mr={3}
                  src={image}
                  // src={image.imageUrl}
                />
              ))}
            </Flex>
          ) : null}
        </Box>
      </>
    )
  );
};

export default Gallery;
