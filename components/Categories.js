import { Box, Text, Flex } from "@chakra-ui/react";
import media from "utils/media";
import { Link } from "./Link";

const categories = [
  { name: "computer" },
  { name: "mobile / tablet" },
  { name: "food" },
  { name: "etudes" },
  { name: "bricolage" },
  { name: "transport" },
  { name: "divertissement" },
];

const Categories = ({ ...rest }) => {
  return (
    <Flex
      as="aside"
      color="gray.500"
      bg="white"
      mr={{ md: 2 }}
      mt={{ base: 2, md: 0 }}
      rounded="md"
      overflowY="auto"
      overflowX={media("auto", "hidden")}
      width={media("auto", "200px")}
      flexDir={media("row", "column")}
      {...rest}
    >
      {categories.map((category, index) => (
        <Link key={index} mute>
          <Box
            textTransform="capitalize"
            p={1}
            fontWeight="500"
            backgroundColor={media("gray.500", "transparent")}
            color={media("white", "gray.800")}
            m={media("1", "0")}
            px={2}
            rounded="sm"
            _hover={{
              backgroundColor: "gray.100",
              transform: "scale(1.01)",
            }}
          >
            <Text fontSize="sm" fontWeight="bold" isTruncated>
              {category.name}
            </Text>
          </Box>
        </Link>
      ))}
    </Flex>
  );
};

export default Categories;
