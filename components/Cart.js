import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import cartGridTemplateCols from "./gridTemplateCols/cartGridTemplateCols";
import CartCard from "./Products/CartCard";
import formatPrice from "utils/formatPrice";
import useCart from "hooks/useCart";
import { Link } from "./Link";
import * as valtio from "valtio";
import { globalState } from "./Layout";

function Cart({ renderOpenButton }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { handleClearCart, isLoading } = useCart();

  const { cart } = valtio.useSnapshot(globalState);

  const totalPrice =
    cart?.products?.reduce((prev, product) => {
      const discount = 10;

      const discountedPrice = product.price - (product.price * discount) / 100;

      const subTotalPrice = discountedPrice * product.quantity;

      return subTotalPrice + prev;
    }, 0) || "0.00";

  const handleClear = (handleCloseModal) => {
    handleClearCart();
  };

  console.log(cart);

  return (
    <>
      {renderOpenButton(onOpen)}

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        closeOnOverlayClick={false}
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent mx={2}>
          <ModalHeader>
            <Heading
              fontSize={{ base: "lg", md: "3xl" }}
              // py={{ base: 0, md: 2 }}
            >
              Cart ({cart?.products?.length || 0} items)
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg="gray.100" px={{ base: 1, md: 3 }}>
            <Stack spacing={2} height="300px" overflowY="auto" pb={5} pr={2}>
              <Grid
                as="article"
                gridTemplateColumns={cartGridTemplateCols}
                fontWeight="bold"
                pos="sticky"
                top={0}
                zIndex={1}
                bg="gray.100"
                color="gray.500"
                d={{ base: "none", md: "grid" }}
              >
                <GridItem>ITEM</GridItem>
                <GridItem textAlign="center">QTY</GridItem>
                <GridItem textAlign="center">UNIT PRICE</GridItem>
                <GridItem textAlign="right">SUBTOTAL</GridItem>
              </Grid>

              {cart?.products?.map((product) => (
                <CartCard key={product._id} product={product} />
              ))}
            </Stack>
          </ModalBody>

          <ModalFooter flexDir="column" alignItems="flex-end">
            <Flex alignItems="flex-end">
              <Text as="b" mr={2}>
                Total:
              </Text>
              <Text fontSize="2xl" as="b" ml={2}>
                {formatPrice("en-NG", totalPrice, "NGN")}
              </Text>
            </Flex>

            <Text color="gray.500" fontSize="sm" mt={2}>
              Delivery fee not included yet
            </Text>
            <Text color="gray.500" fontSize="sm" mb={3}>
              International Shipping and Customs fee not included yet
              (NON-REFUNDABLE in case of a return)
            </Text>

            <Flex alignSelf="stretch" mt={2} flexWrap="wrap">
              <Box flex={1}>
                <Button
                  disabled={isLoading || !cart?.products?.length}
                  colorScheme="red"
                  onClick={handleClear.bind(null, onClose)}
                  w={{ base: "100%", md: "auto" }}
                >
                  Clear Cart
                </Button>
              </Box>

              <Link
                href="/"
                disabled={isLoading}
                onClick={onClose}
                mute
                w={{ base: "100%", md: "auto" }}
                my={{ base: 2, md: 0 }}
                mx={{ md: 2 }}
              >
                <Button
                  disabled={isLoading}
                  w={{ base: "100%", md: "auto" }}
                  onClick={onClose}
                >
                  Continue Shopping
                </Button>
              </Link>

              <Button
                disabled={true}
                onClick={onClose}
                w={{ base: "100%", md: "auto" }}
                colorScheme="green"
              >
                Proceed to checkout
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Cart;
