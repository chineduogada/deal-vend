import { Box, Flex, HStack } from "@chakra-ui/react";
import Brand from "./Brand";
import SearchBar from "./SearchBar";
import Auth from "./Auth";
import Categories from "./Categories";
import Carousel from "./Carousel";
import media from "../utils/media";

const Top = () => (
  <HStack spacing={2} borderBottom="1px" borderBottomColor="gray.100" p={2}>
    <Brand />
    <SearchBar />
    <Auth />
  </HStack>
);

const Center = () => (
  <Flex p={1} flexDir={media("column", "row")}>
    <Categories order={media(1, 0)} />
    <Carousel flex="1" />
  </Flex>
);

const Header = () => {
  return (
    <Box>
      <Top />

      <Center />

      <Box>down</Box>
    </Box>
  );
};

export default Header;
