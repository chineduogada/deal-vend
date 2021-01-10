import { Flex, HStack, Box } from "@chakra-ui/react";
import Brand from "./Brand";
import SearchBar from "./SearchBar";
import Auth from "./Auth";
import Categories from "./Categories";
import Carousel from "./Carousel";
import media from "../utils/media";
import Breadcrumb from "./Breadcrumb";

const Top = () => (
  <HStack
    spacing={2}
    borderBottom="1px"
    borderBottomColor="gray.100"
    p={2}
    bg="white"
    rounded="md"
  >
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

const Bottom = ({ paths }) => <Breadcrumb paths={paths} />;

const Header = ({
  showHeaderCenter,
  breadcrumbPaths = [
    { name: "computer", path: "/hi" },
    { name: "dell", path: "/sd" },
  ],
}) => {
  return (
    <Box mb={5}>
      <Top />
      {showHeaderCenter && <Center />}

      {breadcrumbPaths && <Bottom paths={breadcrumbPaths} />}
    </Box>
  );
};

export default Header;
