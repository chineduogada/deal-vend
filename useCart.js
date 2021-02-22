import { useContext } from "react";
import CartContext from "./context/CartContext";

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);

  const handleAddProduct = (payload) => {
    // console.log(payload);
    dispatch({ type: "ADD_PRODUCT", payload });
  };

  const handleRemoveProduct = (payload) =>
    dispatch({ type: REMOVE_PRODUCT, payload });
  const handleIncreaseItemCount = (payload) =>
    dispatch({ type: INCREASE_ITEM_COUNT, payload });
  const handleDecreaseItemCount = (payload) =>
    dispatch({ type: DECREASE_ITEM_COUNT, payload });

  return {
    state,
    handleAddProduct,
    handleRemoveProduct,
    handleIncreaseItemCount,
    handleDecreaseItemCount,
  };
};

export default useCart;
