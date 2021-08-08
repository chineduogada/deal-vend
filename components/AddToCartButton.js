import { Button, Flex, IconButton, Spinner, Text } from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../useCart";
import * as valtio from "valtio";
import { globalState } from "./Layout";

const AddToCartButton = ({ product }) => {
  const { cart } = valtio.useSnapshot(globalState);

  const { handleAddProduct, handleDecreaseQty, handleIncreaseQty, isLoading } =
    useCart();

  product = {
    ...product,
    productId: product.id,
  };

  const existingItem = cart?.products?.find(
    (p) => p.productId === product.productId
  );

  return existingItem ? (
    <Flex alignItems="center" justifyContent="space-between" w="100%">
      <IconButton
        variant="ghost"
        onClick={handleIncreaseQty.bind(null, product)}
      >
        <AiOutlinePlus />
      </IconButton>

      <Flex alignItems="center">
        {isLoading && <Spinner size="sm" mr={2} />}
        <Text as="b">{existingItem.quantity}</Text>
      </Flex>

      <IconButton
        variant="ghost"
        disabled={existingItem.quantity === 1}
        onClick={handleDecreaseQty.bind(null, product)}
      >
        <AiOutlineMinus />
      </IconButton>
    </Flex>
  ) : (
    <Button
      w="100%"
      leftIcon={<FaCartPlus />}
      onClick={handleAddProduct.bind(null, product)}
      disabled={isLoading}
      colorScheme="green"
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
