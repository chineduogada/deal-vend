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
} from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";
import { BsCaretDownFill } from "react-icons/bs";
import media from "utils/media";
import Cart from "../Cart";
import { Link } from "../Link";
import { useRouter } from "next/router";

const NavbarAuthControls = () => {
  const router = useRouter();
  const redirectTo = router.asPath;

  return (
    <>
      <Box display={media("block", "none")}>
        <Menu>
          <MenuButton as={Button}>
            <BsCaretDownFill />
          </MenuButton>

          <MenuList>
            <MenuItem>
              <Link href={`/auth/login?redirectTo=${redirectTo}`}>Login</Link>
            </MenuItem>
            <MenuItem>
              <Link href={`/auth/signup?redirectTo=${redirectTo}`}>
                Sign up
              </Link>
            </MenuItem>
            <MenuItem>
              <Cart
                renderOpenButton={(onOpen) => (
                  <Text onClick={onOpen}>Your Items Cart</Text>
                )}
              />
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <ButtonGroup display={media("none", "flex")}>
        <Link href={`/auth/login?redirectTo=${redirectTo}`} mute>
          <Button>Login</Button>
        </Link>

        <Link href={`/auth/signup?redirectTo=${redirectTo}`} mute>
          <Button>Sign up</Button>
        </Link>

        <Cart
          renderOpenButton={(onOpen) => (
            <IconButton onClick={onOpen}>
              <GrCart />
            </IconButton>
          )}
        />
      </ButtonGroup>
    </>
  );
};

export default NavbarAuthControls;
