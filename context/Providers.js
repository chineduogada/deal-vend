import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "react-rapid-carousel";

const Providers = ({ children }) => {
  return (
    <ChakraProvider>
      <ThemeProvider
        theme={{
          dots: { 1: "white", 2: "gray" },
          carets: { 1: "#333", 2: "transparent" },
        }}
      >
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default Providers;
