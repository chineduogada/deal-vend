import { ButtonGroup, Button, IconButton } from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";

const Auth = () => {
  return (
    <>
      <ButtonGroup>
        <Button>Login</Button>

        <Button>Sign up</Button>
      </ButtonGroup>

      <IconButton fontSize="xl">
        <TiShoppingCart />
      </IconButton>
    </>
  );
};

export default Auth;
