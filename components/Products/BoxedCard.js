import Image from "next/image";
import { Flex, Text } from "@chakra-ui/react";

const BoxedCard = ({ product }) => {
  return (
    <Flex flexDir="column" height={190} m={1} bg="gray.100">
      <Image
        src="/img/carousel-img-1.jpg"
        layout="responsive"
        width={100}
        height={100}
      />
      <Text isTruncated>{product.name}</Text>
    </Flex>
  );
};

export default BoxedCard;
