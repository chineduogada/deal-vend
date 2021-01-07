import { Box, Image } from "@chakra-ui/react";
import { Fader } from "react-rapid-carousel";

const images = ["/img/carousel-img-1.jpg", "/img/carousel-img-2.jpg"];

const Carousel = ({ ...rest }) => {
  return (
    <Box m={1} rounded="lg" overflow="hidden" {...rest}>
      <Fader buttons>
        {images.map((img, index) => (
          <Box h={300} key={index}>
            <Image src={img} />
          </Box>
        ))}
      </Fader>
    </Box>
  );
};

export default Carousel;
