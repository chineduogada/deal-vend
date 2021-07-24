import { currentUser, logout } from "utils/http";
import { del, get, set } from "utils/localStorageAPI";
import useToast from "./useToast";

const useAuth = () => {
  const toast = useToast();

  const me = get("me");

  const handleFetchCurrentUser = async () => {
    try {
      const data = await currentUser();

      set("me", data);
    } catch (error) {
      toast.display({ description: error.message });
    }
  };

  const handleLogout = async () => {
    try {
      await logout();

      del("me");
    } catch (error) {
      toast.display({ description: error.message });
    }
  };

  return { handleFetchCurrentUser, handleLogout, me };
};

export default useAuth;
