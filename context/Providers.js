import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "react-rapid-carousel";

const Providers = ({ children }) => {
  return (
    <ChakraProvider>
      <ThemeProvider
        theme={{
          carets: { 1: "green", 2: "#eee" },
          dots: { 1: "green", 2: "#ddd" },
        }}
      >
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default Providers;
