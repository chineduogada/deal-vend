import { useState } from "react";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Gallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <Box>
      <Box rounded="md" overflow="hidden" width={200} height={200} mb={1}>
        <Image layout="fixed" width={200} height={200} src={currentImage} />
      </Box>

      <Flex width={200} overflowX="auto" pb={1}>
        {images.map((image) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleImageClick.bind(null, image)}
          >
            <Box
              rounded="sm"
              overflow="hidden"
              flexShrink={0}
              mr={1}
              width={70}
              height={70}
            >
              <Image layout="fixed" width={70} height={70} src={image} />
            </Box>
          </motion.button>
        ))}
      </Flex>
    </Box>
  );
};

export default Gallery;
