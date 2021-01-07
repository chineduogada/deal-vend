import { ButtonGroup, Button, IconButton } from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";

const Auth = () => {
  return (
    <>
      <ButtonGroup>
        <Button>Login</Button>

        <Button>Sign up</Button>
      </ButtonGroup>

      <IconButton fontSize="xl">
        <GrCart />
      </IconButton>
    </>
  );
};

export default Auth;
