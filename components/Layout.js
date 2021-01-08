import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box px={2} m="0 auto" maxW={900}>
      <Header />

      <Box as="main">{children}</Box>

      <Footer />
    </Box>
  );
};

export default Layout;
