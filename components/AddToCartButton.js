import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../useCart";

const AddToCartButton = ({ product }) => {
  const cart = useCart();

  product = {
    productId: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
  };

  const existingItem = false;
  //   cart.items.find(
  //   (item) => item.productId === product.productId
  // );

  return existingItem ? (
    <Flex alignItems="center" justifyContent="space-between" w="100%">
      <IconButton
        variant="ghost"
        onClick={cart.handleIncreaseQty.bind(null, product)}
      >
        <AiOutlinePlus />
      </IconButton>

      <Text as="b">{existingItem.quantity}</Text>

      <IconButton
        variant="ghost"
        disabled={existingItem.quantity === 1}
        onClick={cart.handleDecreaseQty.bind(null, product)}
      >
        <AiOutlineMinus />
      </IconButton>
    </Flex>
  ) : (
    <Button
      w="100%"
      leftIcon={<FaCartPlus />}
      onClick={cart.handleAddProduct.bind(null, product)}
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
