import { Flex, HStack, Box, forwardRef } from "@chakra-ui/react";
import Brand from "components/Brand";
import SearchBar from "components/SearchBar";
import NavbarAuthControls from "components/Auth/Navbar";
import Categories from "components/Categories";
import Carousel from "components/Carousel";
import Breadcrumb from "components/Breadcrumb";
import media from "utils/media";

const Top = () => (
  <>
    <HStack
      spacing={2}
      borderBottom="1px"
      borderBottomColor="gray.100"
      p={2}
      bg="white"
      rounded="md"
      justifyContent={{ base: "space-between", md: "flex-start" }}
    >
      <Brand />

      <Box d={{ base: "none", md: "block" }} flex={1}>
        <SearchBar />
      </Box>

      <NavbarAuthControls />
    </HStack>

    <Box d={{ base: "block", md: "none" }} mt={2}>
      <SearchBar bg="white" />
    </Box>
  </>
);

const Center = () => (
  <Flex p={1} flexDir={media("column", "row")}>
    <Categories order={media(1, 0)} />
    <Carousel flex="1" />
  </Flex>
);

const Bottom = ({ paths }) => <Breadcrumb paths={paths} />;

const Header = forwardRef(
  ({ showHeaderCenter, breadcrumbPaths, ...rest }, ref) => {
    return (
      <Box mb={5} ref={ref} {...rest}>
        <Top />

        {showHeaderCenter && <Center />}

        {breadcrumbPaths && <Bottom paths={breadcrumbPaths} />}
      </Box>
    );
  }
);

export default Header;
