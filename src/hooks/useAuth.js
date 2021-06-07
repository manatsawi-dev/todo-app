import { useEffect, useState } from "react";
import * as services from "../services/auth";
import * as storages from "../utils/storage";

export const useAuth = () => {
  const [isCheckedAuth, setIsCheckedAuth] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const tokenStore = await storages.getAuthToken();
      setToken(tokenStore);
      setIsCheckedAuth(true);
    };
    getToken();
  }, []);

  const authLogout = async () => {
    try {
      await services.authLogout();
      storages.clearStorage();
    } catch (error) {
      alert("failed add todo: " + error);
    }
  };

  return {
    token,
    isCheckedAuth,
    authLogout,
  };
};
