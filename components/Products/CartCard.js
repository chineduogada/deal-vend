import Image from "next/image";
import Link from "next/link";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Flex,
  GridItem,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { BiHeart, BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import { AiOutlineStop } from "react-icons/ai";
import formatPrice from "../../utils/formatPrice";
import truncate from "../../utils/truncate";
import cartGridTemplateCols from "../gridTemplateCols/cartGridTemplateCols";

const SaveAndTrashBtn = ({ ...rest }) => (
  <ButtonGroup {...rest} mt={1} size="sm">
    <Button
      d={{ base: "none", md: "flex" }}
      variant="ghost"
      leftIcon={<BiHeart />}
    >
      Moved to saved items
    </Button>

    <Box
      d={{ base: "block", md: "none" }}
      borderRight="1px"
      borderColor="gray.300"
      pr={3}
    >
      <IconButton isRound variant="ghost">
        <BiHeart />
      </IconButton>
    </Box>

    <Button variant="ghost" leftIcon={<BiTrash />}>
      Trash
    </Button>
  </ButtonGroup>
);

const Counter = ({ ...rest }) => (
  <Flex
    {...rest}
    h="100%"
    flexDir={{ base: "row", md: "column" }}
    alignItems="center"
    justifyContent={{ base: "space-between", md: "center" }}
  >
    <Button size="sm">
      <BiPlus />
    </Button>

    <Text as="b">1</Text>

    <Button size="sm">
      <BiMinus />
    </Button>
  </Flex>
);

const UnitPrice = ({ ...rest }) => (
  <Flex
    {...rest}
    flexDir="column"
    alignItems={{ base: "flex-end", md: "center" }}
    justifyContent="center"
    h={{ base: "auto", md: "100%" }}
  >
    <Text fontWeight="500" mb={{ base: 0, md: 2 }}>
      {formatPrice("en-NG", 5500, "NGN")}
    </Text>

    <Text fontSize="sm" fontWeight="500" textDecor="line-through" opacity={0.7}>
      {formatPrice("en-NG", 5500, "NGN")}
    </Text>
    <Text fontWeight="500" fontSize="xs" d={{ base: "none", md: "block" }}>
      Savings {formatPrice("en-NG", 5500, "NGN")}
    </Text>
  </Flex>
);

const CartCard = ({ outOfStock }) => {
  return (
    <Box
      as="article"
      p={{ base: 1, md: 0 }}
      d={{ base: "block", md: "grid" }}
      gridTemplateColumns={outOfStock ? "3.5fr 2.5fr" : cartGridTemplateCols}
      rounded="md"
      boxShadow="md"
      bg="white"
      opacity={outOfStock && 0.5}
    >
      <GridItem
        borderRight={{ base: 0, md: "1px" }}
        borderColor="gray.300"
        p={1}
      >
        <Flex
          borderBottom={outOfStock ? 0 : { base: "1px", md: 0 }}
          borderColor="gray.300"
          pb={2}
        >
          <Box
            w={{ base: "110px", md: "60px" }}
            h={{ base: "110px", md: "60px" }}
            mr={1}
            alignItems="flex-start"
            rounded="md"
            overflow="hidden"
            flexShrink={0}
            pos="relative"
          >
            <Image
              src="/img/carousel-img-1.jpg"
              width={100}
              height={100}
              layout="responsive"
            />
          </Box>

          <Box flex={1}>
            <Text
              color="gray.500"
              fontSize="sm"
              d={{ base: "none", md: "block" }}
            >
              Seller: ARKLAND COMPUTER
            </Text>

            <Box>
              <Link href="/sd">
                <a>
                  <Text as="b" fontSize="sm" mb={{ base: 2, md: 0 }}>
                    {outOfStock
                      ? truncate(
                          "STREAM 11 INTEL CELERON® 4GB RAM 32GB EMMC WIN 10+32GB FLASH",
                          30
                        )
                      : truncate(
                          "STREAM 11 INTEL CELERON® 4GB RAM 32GB EMMC WIN 10+32GB FLASH STREAM 11 INTEL CELERON® 4GB RAM 32GB EMMC WIN 10+32GB FLASH STREAM 11 INTEL CELERON® 4GB RAM 32GB EMMC WIN 10+32GB FLASH STREAM 11 INTEL CELERON® 4GB RAM 32GB EMMC WIN 10+32GB FLASH",
                          70
                        )}
                  </Text>
                </a>
              </Link>
            </Box>

            <SaveAndTrashBtn d={{ base: "none", md: "flex" }} />

            <UnitPrice d={{ base: "flex", md: "none" }} />
          </Box>
        </Flex>

        <Box
          p={1}
          d={{ base: "flex", md: "none" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <SaveAndTrashBtn />
          <Counter w="100px" />
        </Box>
      </GridItem>

      {outOfStock ? (
        <GridItem p={1} d="grid" placeItems="center">
          <Badge variant="outline" fontSize="xl" d="flex" alignItems="center">
            <AiOutlineStop />

            <Text ml={4}>Out of stock</Text>
          </Badge>
        </GridItem>
      ) : (
        <>
          <GridItem
            d={{ base: "none", md: "block" }}
            borderRight={{ base: 0, md: "1px" }}
            borderColor="gray.300"
            p={2}
          >
            <Counter />
          </GridItem>

          <GridItem
            d={{ base: "none", md: "block" }}
            borderRight={{ base: 0, md: "1px" }}
            borderColor="gray.300"
            p={1}
          >
            <UnitPrice />
          </GridItem>

          <GridItem d={{ base: "none", md: "grid" }} placeItems="center" p={1}>
            <Text fontWeight="700">{formatPrice("en-NG", 15500, "NGN")}</Text>
          </GridItem>
        </>
      )}
    </Box>
  );
};

export default CartCard;
