import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { BiHeart, BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import formatPrice from "../../utils/formatPrice";

const CartCard = ({}) => {
  return (
    <Grid
      as="article"
      gridTemplateColumns="3.5fr .5fr 1fr .75fr"
      rounded="md"
      boxShadow="md"
      bg="white"
    >
      <GridItem borderRight="1px" borderColor="gray.300" p={1}>
        <Flex>
          <Box
            w="60px"
            h="60px"
            mr={1}
            alignItems="flex-start"
            rounded="md"
            overflow="hidden"
          >
            <Image src="/img/carousel-img-1.jpg" width={60} height={60} />
          </Box>

          <Box flex={1}>
            <Text color="gray.500" fontSize="sm">
              Seller: ARKLAND COMPUTER
            </Text>

            <Box>
              <Link href="/sd">
                <a>
                  <Text as="b" fontSize="sm">
                    STREAM 11 INTEL CELERON® 4GB RAM 32GB EMMC WIN 10+32GB FLASH
                  </Text>
                </a>
              </Link>
            </Box>

            <ButtonGroup mt={1} size="sm">
              <Button variant="ghost" leftIcon={<BiHeart />}>
                Moved to saved items
              </Button>

              <Button variant="ghost" leftIcon={<BiTrash />}>
                Remove
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
      </GridItem>

      <GridItem borderRight="1px" borderColor="gray.300" p={2}>
        <Flex
          h="100%"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Button size="sm">
            <BiPlus />
          </Button>

          <Text as="b">1</Text>

          <Button size="sm">
            <BiMinus />
          </Button>
        </Flex>
      </GridItem>

      <GridItem borderRight="1px" borderColor="gray.300" p={1}>
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Text fontWeight="500" mb={2}>
            {formatPrice("en-NG", 5500, "NGN")}
          </Text>

          <Text
            fontSize="sm"
            fontWeight="500"
            textDecor="line-through"
            opacity={0.7}
          >
            {formatPrice("en-NG", 5500, "NGN")}
          </Text>
          <Text fontWeight="500" fontSize="xs">
            Savings {formatPrice("en-NG", 5500, "NGN")}
          </Text>
        </Flex>
      </GridItem>

      <GridItem d="grid" placeItems="center" p={1}>
        <Text fontWeight="700">{formatPrice("en-NG", 15500, "NGN")}</Text>
      </GridItem>
    </Grid>
  );
};

export default CartCard;
