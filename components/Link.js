import NextLink from "next/link";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

export const Link = ({ children, href = "#", as, mute, d, ...rest }) => {
  return (
    <NextLink href={href} as={as} passHref>
      <Box
        as="a"
        _hover={{
          color: "brand.black1",
          textDecoration: mute ? "none" : "underline",
        }}
        {...rest}
      >
        {children}
      </Box>
    </NextLink>
  );
};

Link.propTypes = {
  children: PropTypes.any.isRequired,
  mute: PropTypes.bool,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};
