import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, showCarousel }) => {
  return (
    <Box px={2} m="0 auto" maxW={900}>
      <Header showCarousel={showCarousel} />

      <Box as="main">{children}</Box>

      <Footer />
    </Box>
  );
};

export default Layout;
