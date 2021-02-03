import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "react-rapid-carousel";
import CartContext from "./CartContext";
import useCart from "../useCart";

const Providers = ({ children }) => {
  const { state } = useCart();

  return (
    <ChakraProvider>
      <ThemeProvider
        theme={{
          dots: { 1: "white", 2: "#333" },
          carets: { 1: "white", 2: "#333" },
        }}
      >
        <CartContext.Provider value={state}>{children}</CartContext.Provider>
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default Providers;
