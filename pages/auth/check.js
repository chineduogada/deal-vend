import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Loader } from "components/Feedback";

// Persist the user on fresh signin

const AuthCheckPage = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // auth.handleFetchCurrentUser();
    }, 3000);
  }, []);

  useEffect(() => {
    if (auth.me) {
      console.log(auth.me);
      router.replace("/");
    }
  }, [auth.me]);

  return <Loader h="100vh" />;
};

export default AuthCheckPage;
