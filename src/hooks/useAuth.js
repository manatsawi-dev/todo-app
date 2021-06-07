import * as services from "../services/auth";
import * as storages from "../utils/storage";

export const useAuth = () => {
  const authLogout = async () => {
    try {
      await services.authLogout();
      storages.clearStorage();
    } catch (error) {
      alert("failed add todo: " + error);
    }
  };

  return {
    authLogout,
  };
};
