import Image from "next/image";
import { Text, Badge, Box } from "@chakra-ui/react";
import formatPrice from "../../utils/formatPrice";
import Link from "next/link";

const discount = 20;
const price = 7000;

const newPrice = price - (discount / 100) * price;

const BoxedCard = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a>
        <Box
          m="2px"
          overflow="hidden"
          rounded="sm"
          transition=".15s"
          _hover={{
            shadow: "md",
            transform: "scale(0.95)",
          }}
        >
          <Badge
            colorScheme="green"
            position="absolute"
            top={1}
            right={1}
            zIndex={1}
          >
            - {discount}%
          </Badge>
          <Image
            src="/img/carousel-img-1.jpg"
            layout="responsive"
            width={100}
            height={100}
          />

          <Box p={1}>
            <Text
              mb={1}
              isTruncated
              _first={{
                textTransform: "capitalize",
              }}
            >
              {product.name}
            </Text>
            <Text
              fontWeight="bold"
              fontSize="lg"
              m={0}
              lineHeight={1}
              isTruncated
            >
              {formatPrice("en-NG", newPrice, "NGN")}
            </Text>
            <Text
              fontSize="sm"
              textDecor="line-through"
              opacity={0.5}
              isTruncated
            >
              {formatPrice("en-NG", price, "NGN")}
            </Text>
          </Box>
        </Box>
      </a>
    </Link>
  );
};

export default BoxedCard;
