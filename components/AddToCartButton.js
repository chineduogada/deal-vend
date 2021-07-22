import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../useCart";

const AddToCartButton = ({ product }) => {
  const { handleAddProduct, state } = useCart();

  product = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
  };

  // console.log(handleAddProduct);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const existingItem = state.find((item) => item.id === product.id);

  return existingItem ? (
    <Flex alignItems="center" justifyContent="space-between" w="100%">
      <IconButton variant="ghost">
        <AiOutlinePlus />
      </IconButton>

      <Text as="b">{existingItem.itemCount}</Text>

      <IconButton variant="ghost" disabled={existingItem.itemCount === 1}>
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
