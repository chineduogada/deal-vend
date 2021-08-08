import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "react-rapid-carousel";

const Providers = ({ children }) => {
  return (
    <ChakraProvider>
      <ThemeProvider
        theme={{
          dots: { 1: "white", 2: "#333" },
          carets: { 1: "white", 2: "#333" },
        }}
      >
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default Providers;
