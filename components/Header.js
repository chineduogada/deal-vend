import { Flex, HStack, Box } from "@chakra-ui/react";
import Brand from "./Brand";
import SearchBar from "./SearchBar";
import Auth from "./Auth";
import Categories from "./Categories";
import Carousel from "./Carousel";
import media from "../utils/media";
import Breadcrumb from "./Breadcrumb";

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

      <Auth />
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

const Header = ({ showHeaderCenter, breadcrumbPaths }) => {
  return (
    <Box mb={5}>
      <Top />

      {showHeaderCenter && <Center />}

      {breadcrumbPaths && <Bottom paths={breadcrumbPaths} />}
    </Box>
  );
};

export default Header;
