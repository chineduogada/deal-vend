import {
  ButtonGroup,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";
import { BsCaretDownFill } from "react-icons/bs";
import media from "utils/media";
import Cart from "../Cart";
import { Link } from "../Link";
import { useRouter } from "next/router";
import useAuth from "hooks/useAuth";
import * as valtio from "valtio";
import { globalState } from "components/Layout";

const NavbarAuthControls = () => {
  const auth = useAuth();

  const { cart } = valtio.useSnapshot(globalState);

  const cartItemsLength =
    cart?.products?.reduce((prev, product) => +product.quantity + +prev, 0) ||
    0;

  const router = useRouter();
  const redirectTo =
    router.asPath.includes("signup") || router.asPath.includes("login")
      ? router.query.redirectTo || "/"
      : router.asPath;

  console.log(router.asPath);

  const getAuthControlsHref = (ctx) => `/auth/${ctx}?redirectTo=${redirectTo}`;

  const renderedCartButton = (
    <Cart
      renderOpenButton={(onOpen) => (
        <Button onClick={onOpen} ml={2} pos="relative">
          <Flex
            pos="absolute"
            top={0}
            right={0}
            bg="green.500"
            color="white"
            rounded="full"
            alignItems="center"
            justifyContent="center"
            w="20px"
            h="20px"
          >
            <Text transform="translate(5%,-2%)" fontSize="sm">
              {cartItemsLength}
            </Text>
          </Flex>
          <GrCart />
        </Button>
      )}
    />
  );

  const MenuItemLink = ({ ctx, href, children }) => {
    return (
      <MenuItem
        {...(router.asPath.includes(ctx) ? {} : { as: "a" })}
        href={href || getAuthControlsHref(ctx)}
      >
        {children}
      </MenuItem>
    );
  };

  return (
    <>
      <Flex display={media("block", "none")}>
        <Menu>
          <MenuButton as={Button}>
            <BsCaretDownFill />
          </MenuButton>

          <MenuList>
            {auth.me ? (
              <>
                <MenuItemLink ctx="profile" href="/profile">
                  View profile
                </MenuItemLink>
                <MenuItem onClick={auth.handleLogout}>Logout</MenuItem>
              </>
            ) : (
              <>
                <MenuItemLink ctx="login">Login</MenuItemLink>
                <MenuItemLink ctx="signup">Sign up</MenuItemLink>
              </>
            )}
          </MenuList>
        </Menu>

        {renderedCartButton}
      </Flex>

      <ButtonGroup display={media("none", "flex")}>
        {auth.me ? (
          <Flex>
            <Menu>
              <MenuButton as={Button}>Hi, {auth.me.firstName}</MenuButton>

              <MenuList>
                <MenuItemLink ctx="profile" href="/profile">
                  View profile
                </MenuItemLink>
                <MenuItem onClick={auth.handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>

            {renderedCartButton}
          </Flex>
        ) : (
          <>
            <Link href={`/auth/login?redirectTo=${redirectTo}`} mute>
              <Button>Login</Button>
            </Link>

            <Link href={`/auth/signup?redirectTo=${redirectTo}`} mute>
              <Button>Sign up</Button>
            </Link>

            {renderedCartButton}
          </>
        )}
      </ButtonGroup>
    </>
  );
};

export default NavbarAuthControls;
