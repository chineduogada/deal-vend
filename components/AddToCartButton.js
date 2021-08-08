import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../useCart";
import * as valtio from "valtio";
import { globalState } from "./Layout";

const AddToCartButton = ({ product }) => {
  const { cart } = valtio.useSnapshot(globalState);

  const { handleAddProduct, handleDecreaseQty, handleIncreaseQty } = useCart();

  product = {
    productId: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
  };

  const existingItem = cart?.products?.find(
    (product) => product.productId === product.productId
  );

  return existingItem ? (
    <Flex alignItems="center" justifyContent="space-between" w="100%">
      <IconButton
        variant="ghost"
        onClick={handleIncreaseQty.bind(null, product)}
      >
        <AiOutlinePlus />
      </IconButton>

      <Text as="b">{existingItem.quantity}</Text>

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
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
