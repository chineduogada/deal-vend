import {
  ButtonGroup,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";
import { BsCaretDownFill } from "react-icons/bs";
import media from "utils/media";
import Cart from "../Cart";
import { Link } from "../Link";
import { useRouter } from "next/router";
import useAuth from "hooks/useAuth";

const NavbarAuthControls = () => {
  const auth = useAuth();

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
        <Button onClick={onOpen} ml={2}>
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
