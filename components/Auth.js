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

        <IconButton fontSize="xl">
          <GrCart />
        </IconButton>
      </ButtonGroup>
    </>
  );
};

export default Auth;
