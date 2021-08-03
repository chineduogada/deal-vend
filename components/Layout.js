import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import usePageReady from "../hooks/usePageReady";
import { useInView } from "react-intersection-observer";
import useAuth from "hooks/useAuth";
import { useEffect } from "react";

const Layout = ({
  children,
  showHeaderCenter,
  breadcrumbPaths,
  footerProps,
}) => {
  const pageReady = usePageReady();

  const headerObserver = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    pageReady && (
      <Box bg="gray.100" pt={2}>
        <Box px={2} m="0 auto" maxW={900} bg="gray.100">
          <Header
            showHeaderCenter={showHeaderCenter}
            breadcrumbPaths={breadcrumbPaths}
            ref={headerObserver.ref}
          />

          <Box as="main">
            {!headerObserver.inView && (
              <Header
                className={"header--inView"}
                w="100%"
                maxW="calc(900px - 16px)"
                bg={{ base: "white", md: "auto" }}
                borderBottom={{ base: "1px solid #ddd", md: "none" }}
                p={{ base: 2, md: 0 }}
                left={{ base: 0, md: "auto" }}
              />
            )}

            {children}
          </Box>

          <Footer {...footerProps} />
        </Box>
      </Box>
    )
  );
};

export default Layout;
