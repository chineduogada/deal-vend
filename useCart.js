import { useReducer } from "react";

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const INCREASE_ITEM_COUNT = "INCREASE_ITEM_COUNT";
const DECREASE_ITEM_COUNT = "DECREASE_ITEM_COUNT";

const initialState = [];

let product;

const reducer = (state, action) => {
  switch (action.key) {
    case ADD_PRODUCT:
      return [...state, { ...action.payload, itemCount: 1 }];

    case REMOVE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);

    case INCREASE_ITEM_COUNT:
      product = state.find((product) => product.id === action.payload);
      product.itemCount += 1;

      return state;

    case DECREASE_ITEM_COUNT:
      product = state.find((product) => product.id === action.payload);
      product.itemCount -= 1;

      return state;

    default:
      return state;
  }
};

const useCart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddProduct = (payload) =>
    dispatch({ type: ADD_PRODUCT, payload });
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
