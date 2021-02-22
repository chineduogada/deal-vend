import * as React from "react";
import { useReducer } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "react-rapid-carousel";
import CartContext from "./CartContext";

const initialState = [];

// let product;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, { ...action.payload, itemCount: 1 }];

    // case REMOVE_PRODUCT:
    //   return state.filter((product) => product.id !== action.payload);

    // case INCREASE_ITEM_COUNT:
    //   product = state.find((product) => product.id === action.payload);
    //   product.itemCount += 1;

    //   return state;

    // case DECREASE_ITEM_COUNT:
    //   product = state.find((product) => product.id === action.payload);
    //   product.itemCount -= 1;

    //   return state;

    default:
      return state;
  }
};
const Providers = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ChakraProvider>
      <ThemeProvider
        theme={{
          dots: { 1: "white", 2: "#333" },
          carets: { 1: "white", 2: "#333" },
        }}
      >
        <CartContext.Provider value={{ state, dispatch }}>
          {children}
        </CartContext.Provider>
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default Providers;
