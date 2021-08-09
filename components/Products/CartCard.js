import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Flex,
  GridItem,
  IconButton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { BiHeart, BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import { AiOutlineStop } from "react-icons/ai";
import formatPrice from "../../utils/formatPrice";
import truncate from "../../utils/truncate";
import cartGridTemplateCols from "../gridTemplateCols/cartGridTemplateCols";
import { Image } from "components/Image";
import { Link } from "components/Link";
import useCart from "hooks/useCart";

const CartCard = ({ product }) => {
  const { outOfStock, price, quantity, name } = product;

  const discount = 10;

  const discountedPrice = price - (price * discount) / 100;

  const subTotalPrice = discountedPrice * quantity;

  const {
    handleRemoveProduct,
    handleIncreaseQty,
    handleDecreaseQty,
    isLoading,
  } = useCart();

  return (
    <Box
      p={{ base: 1, md: 0 }}
      d={{ base: "block", md: "grid" }}
      gridTemplateColumns={outOfStock ? "3.5fr 2.5fr" : cartGridTemplateCols}
      rounded="md"
      boxShadow="md"
      bg="white"
      opacity={outOfStock && 0.5}
    >
      <GridItem borderRight={{ base: 0, md: "1px solid #eee" }} p={1}>
        <Flex
          borderBottom={outOfStock ? 0 : { base: "1px solid #eee", md: 0 }}
          pb={2}
        >
          <Box
            mr={2}
            alignItems="flex-start"
            rounded="md"
            overflow="hidden"
            flexShrink={0}
            pos="relative"
          >
            <Image
              src="/img/carousel-img-1.jpg"
              width={75}
              height={75}
              isProduct
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
                <Text
                  as="b"
                  fontSize="sm"
                  mb={{ base: 2, md: 0 }}
                  textTransform="capitalize"
                >
                  {outOfStock ? truncate(name, 30) : truncate(name, 70)}
                </Text>
              </Link>
            </Box>

            <SaveAndTrashBtn
              handleRemoveProduct={handleRemoveProduct.bind(null, product)}
              disabled={true}
              d={{ base: "none", md: "flex" }}
            />

            <UnitPrice price={price} d={{ base: "flex", md: "none" }} />

            <Text
              textAlign="right"
              fontWeight="700"
              fontSize="lg"
              d={{ base: "block", md: "none" }}
            >
              {formatPrice("en-NG", subTotalPrice, "NGN")}
            </Text>
          </Box>
        </Flex>

        <Box
          p={1}
          d={{ base: "flex", md: "none" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <SaveAndTrashBtn
            handleRemoveProduct={handleRemoveProduct.bind(null, product)}
            disabled={true}
          />
          <Counter
            itemCount={quantity}
            onIncrease={handleIncreaseQty.bind(null, product)}
            onDecrease={handleDecreaseQty.bind(null, product)}
            isLoading={isLoading}
            w="100px"
          />
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
            borderRight={{ base: 0, md: "1px solid #eee" }}
            p={2}
          >
            <Counter
              itemCount={quantity}
              onIncrease={handleIncreaseQty.bind(null, product)}
              onDecrease={handleDecreaseQty.bind(null, product)}
              isLoading={isLoading}
            />
          </GridItem>

          <GridItem
            d={{ base: "none", md: "block" }}
            borderRight={{ base: 0, md: "1px solid #eee" }}
            p={1}
          >
            <UnitPrice price={price} />
          </GridItem>

          <GridItem d={{ base: "none", md: "grid" }} placeItems="center" p={1}>
            <Text fontWeight="700">
              {formatPrice("en-NG", subTotalPrice, "NGN")}
            </Text>
          </GridItem>
        </>
      )}
    </Box>
  );
};

const SaveAndTrashBtn = ({ disabled, handleRemoveProduct, ...rest }) => (
  <ButtonGroup {...rest} mt={1} size="sm">
    <Button
      disabled={disabled}
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
      <IconButton disabled={disabled} isRound variant="ghost">
        <BiHeart />
      </IconButton>
    </Box>

    <Button
      variant="ghost"
      leftIcon={<BiTrash />}
      onClick={handleRemoveProduct}
    >
      Trash
    </Button>
  </ButtonGroup>
);

const Counter = ({ itemCount, onDecrease, onIncrease, isLoading, ...rest }) => (
  <Flex
    {...rest}
    h="100%"
    flexDir={{ base: "row", md: "column" }}
    alignItems="center"
    justifyContent={{ base: "space-between", md: "center" }}
  >
    <Button size="sm" onClick={onIncrease}>
      <BiPlus />
    </Button>

    <Text as="b">{isLoading ? <Spinner size="sm" /> : itemCount}</Text>

    <Button size="sm" onClick={onDecrease} disabled={itemCount == 1}>
      <BiMinus />
    </Button>
  </Flex>
);

const UnitPrice = ({ price, ...rest }) => (
  <Flex
    {...rest}
    flexDir="column"
    alignItems={{ base: "flex-end", md: "center" }}
    justifyContent="center"
    h={{ base: "auto", md: "100%" }}
  >
    <Text fontWeight="500" mb={{ base: 0, md: 2 }}>
      {formatPrice("en-NG", price, "NGN")}
    </Text>

    <Text fontSize="sm" fontWeight="500" textDecor="line-through" opacity={0.7}>
      {formatPrice("en-NG", price, "NGN")}
    </Text>
    <Text fontWeight="500" fontSize="xs" d={{ base: "none", md: "block" }}>
      Savings {formatPrice("en-NG", price, "NGN")}
    </Text>
  </Flex>
);

export default CartCard;
