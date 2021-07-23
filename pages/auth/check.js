import { Loader } from "components/pages";
import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

// Persist the user on fresh signin

const AuthCheckPage = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      auth.persistUserToClient();
    }, 3000);
  }, []);

  useEffect(() => {
    console.log("sdsdsds", router.query.redirect);
    if (auth.isAuthenticated && router.query.redirect) {
      console.log(router.query.redirect);

      location.replace(router.query.redirect);
    }
  }, [auth.isAuthenticated, router.query.redirect]);

  return (<Loader
      h="100vh"
      // message="Authenticating please wait..."
    />);
};

export default AuthCheckPage;
