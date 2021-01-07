import { Box, Flex, HStack } from "@chakra-ui/react";
import Brand from "./Brand";
import SearchBar from "./SearchBar";
import Auth from "./Auth";

const Top = () => (
  <HStack spacing={2} borderBottom="1px" borderBottomColor="gray.100" p={2}>
    <Brand />
    <SearchBar />
    <Auth />
  </HStack>
);

const Header = () => {
  return (
    <Box>
      <Top />

      <Box>Mid</Box>

      <Box>down</Box>
    </Box>
  );
};

export default Header;
