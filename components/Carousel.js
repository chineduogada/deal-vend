import { Box } from "@chakra-ui/react";

const Carousel = ({ ...rest }) => {
  return (
    <Box
      border="1px"
      color="red.400"
      m={1}
      rounded="lg"
      minH={300}
      opacity=".3"
      {...rest}
    >
      Carousel
    </Box>
  );
};

export default Carousel;
