import {
  ButtonGroup,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";
import { BsCaretDownFill } from "react-icons/bs";
import media from "../utils/media";
import Cart from "./Cart";

const Auth = () => {
  return (
    <>
      <Box display={media("block", "none")}>
        <Menu>
          <MenuButton as={Button}>
            <BsCaretDownFill />
          </MenuButton>

          <MenuList>
            <MenuItem>Login</MenuItem>
            <MenuItem>Sign up</MenuItem>
            <MenuItem>Your Items Cart</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <ButtonGroup display={media("none", "flex")}>
        <Button>Login</Button>

        <Button>Sign up</Button>

        <Cart />
      </ButtonGroup>
    </>
  );
};

export default Auth;
