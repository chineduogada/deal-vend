import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import usePageReady from "../hooks/usePageReady";

const Layout = ({ children, showHeaderCenter, breadcrumbPaths }) => {
  const pageReady = usePageReady();

  return (
    pageReady && (
      <Box bg="gray.100" pt={2}>
        <Box px={2} m="0 auto" maxW={900} bg="gray.100">
          <Header
            showHeaderCenter={showHeaderCenter}
            breadcrumbPaths={breadcrumbPaths}
          />

          <Box as="main">{children}</Box>

          <Footer />
        </Box>
      </Box>
    )
  );
};

export default Layout;
