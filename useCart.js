import { useState } from "react";
import { globalState } from "./components/Layout";
import useToast from "./hooks/useToast";
import { addNewCartItem, clearCart, getCart } from "./utils/http";

const useCart = () => {
  const [loading, setLoading] = useState();
  const toast = useToast();

  const handleAddProduct = async (product) => {
    try {
      setLoading(true);
      const cart = await addNewCartItem(product);

      globalState.cart = cart;
    } catch (err) {
      toast.display({ description: err.message });
    } finally {
      setLoading(false);
    }
  };
  const handleRemoveProduct = async (product) => {};

  const handleIncreaseQty = async (product) => {};

  const handleDecreaseQty = async (product) => {};

  const handleGetCart = async () => {
    try {
      setLoading(true);
      const cart = await getCart();

      console.log(cart);

      globalState.cart = cart[0];
    } catch (err) {
      toast.display({ description: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleClearCart = async () => {
    await handleRequest(clearCart);
  };

  return {
    isLoading: loading,
    handleAddProduct,
    handleRemoveProduct,
    handleIncreaseQty,
    handleDecreaseQty,
    handleGetCart,
    handleClearCart,
  };
};

export default useCart;
