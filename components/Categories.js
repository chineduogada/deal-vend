import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";

const categories = [
  { name: "computer" },
  { name: "mobile / tablet" },
  { name: "food" },
];

const Categories = () => {
  return (
    <Box
      as="aside"
      border="1px"
      color="gray.500"
      width="200px"
      height="300px"
      m={1}
      rounded="md"
      overflowY="auto"
    >
      {categories.map((category, index) => (
        <Link href="/" key={index}>
          <a>
            <Box
              p={1}
              fontWeight="500"
              borderBottom="1px"
              _hover={{
                backgroundColor: "gray.500",
                color: "white",
              }}
            >
              <Text isTruncated>{category.name}</Text>
            </Box>
          </a>
        </Link>
      ))}
    </Box>
  );
};

export default Categories;
