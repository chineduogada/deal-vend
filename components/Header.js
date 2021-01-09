import { Box, Flex, HStack, IconButton } from "@chakra-ui/react";
import Brand from "./Brand";
import SearchBar from "./SearchBar";
import Auth from "./Auth";
import Categories from "./Categories";
import Carousel from "./Carousel";
import media from "../utils/media";
import Breadcrumb from "./Breadcrumb";

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

const Bottom = () => (
  <Breadcrumb
    paths={[
      { name: "computer", path: "/hi" },
      { name: "dell", path: "/sd" },
    ]}
  />
);

const Header = ({ showCarousel }) => {
  return (
    <>
      <Top />
      {showCarousel && <Center />}
      <Bottom />
    </>
  );
};

export default Header;
