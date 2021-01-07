import { Box, Flex } from "@chakra-ui/react";
import Brand from "./Brand";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Box>
      <Flex>
        <Brand />
        <SearchBar />
      </Flex>

      <Box>Mid</Box>

      <Box>down</Box>
    </Box>
  );
};

export default Header;
