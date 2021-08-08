import { Text } from "@chakra-ui/react";
import { Link } from "./Link";

const Brand = () => {
  return (
    <Link href="/" mute>
      <Text fontWeight="bold" fontSize="2xl">
        DealVend
      </Text>
    </Link>
  );
};

export default Brand;
