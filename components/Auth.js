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
        <Button>Login</Button>

        <Button>Sign up</Button>

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

export default Auth;
