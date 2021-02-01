import {
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
import formatPrice from "../utils/formatPrice";
import CartCard from "./Products/CartCard";

function Cart({ renderOpenButton }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Heading fontSize="3xl">Cart (4 items)</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg="gray.100">
            <Stack spacing={2} height="300px" overflowY="auto" pb={5} pr={2}>
              <Grid
                as="article"
                gridTemplateColumns="3.5fr .5fr 1fr .75fr"
                fontWeight="bold"
                pos="sticky"
                top={0}
                zIndex={1}
                bg="gray.100"
                color="gray.500"
              >
                <GridItem>ITEM</GridItem>
                <GridItem textAlign="center">QTY</GridItem>
                <GridItem textAlign="center">UNIT PRICE</GridItem>
                <GridItem textAlign="right">SUBTOTAL</GridItem>
              </Grid>

              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />
            </Stack>
          </ModalBody>

          <ModalFooter flexDir="column" alignItems="flex-end">
            <Flex
              alignItems="flex-end"
              justifyContent="space-between"
              w="230px"
            >
              <Text as="b">Total:</Text>
              <Text fontSize="lg" as="b" ml={2}>
                {formatPrice("en-NG", 133030, "NGN")}
              </Text>
            </Flex>

            <Text color="gray.500" fontSize="sm">
              Delivery fee not included yet
            </Text>
            <Text color="gray.500" fontSize="sm">
              International Shipping and Customs fee not included yet
              (NON-REFUNDABLE in case of a return)
            </Text>

            <ButtonGroup mt={2}>
              <Button onClick={onClose}>Continue Shopping</Button>
              <Button onClick={onClose}>Proceed to checkout</Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Cart;