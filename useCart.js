import { useState } from "react";
import { globalState } from "./components/Layout";
import useToast from "./hooks/useToast";
import {
  addNewCartItem,
  clearCart,
  decreaseCartItem,
  deleteCartItem,
  getCart,
  increaseCartItem,
} from "./utils/http";

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
  const handleRemoveProduct = async (product) => {
    try {
      setLoading(true);
      const cart = await deleteCartItem(product);

      globalState.cart = cart;
    } catch (err) {
      toast.display({ description: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleIncreaseQty = async (product) => {
    try {
      setLoading(true);
      const cart = await increaseCartItem(product);

      globalState.cart = cart;
    } catch (err) {
      toast.display({ description: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleDecreaseQty = async (product) => {
    try {
      setLoading(true);
      const cart = await decreaseCartItem(product);

      globalState.cart = cart;
    } catch (err) {
      toast.display({ description: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleGetCart = async () => {
    try {
      setLoading(true);
      const cart = await getCart();

      globalState.cart = cart[0];
    } catch (err) {
      toast.display({ description: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleClearCart = async () => {
    try {
      setLoading(true);
      await clearCart();

      globalState.cart = {};
    } catch (err) {
      toast.display({ description: err.message });
    } finally {
      setLoading(false);
    }
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
