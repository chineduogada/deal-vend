import { Box, Flex } from "@chakra-ui/react";
import {
  Fader,
  ThemeProvider as FaderThemeProvider,
} from "react-rapid-carousel";
import { Image } from "./Image";

const Gallery = ({ product }) => {
  return (
    product && (
      <>
        {/* For Mobile */}
        <Box d={{ base: "block", md: "none" }} w="100%">
          <Fader buttons>
            {[`/img/${product.name}.jpg`, ...product.images].map(
              (image, index) => (
                <Flex justifyContent="center" key={index}>
                  <Image w="280px" h="230px" isProduct src={image} />
                </Flex>
              )
            )}
          </Fader>
        </Box>

        {/* From Tab */}
        <Box d={{ base: "none", md: "block" }}>
          <Image
            w="250px"
            h="200px"
            isProduct
            src={`/img/${product.name}.jpg`}
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
