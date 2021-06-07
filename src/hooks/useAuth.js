import { useEffect, useState } from "react";
import * as services from "../services/auth";
import * as storages from "../utils/storage";
import * as navigationServices from "../utils/navigation-services";
import * as ROUTES from "../routes/routes-name";

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

  const authLogin = async (reqBody) => {
    try {
      const response = await services.authLogin(reqBody);
      if (response.success) {
        await storages.saveAuthToken(response.token);
        navigationServices.navigateReplaceTo({ pathname: ROUTES.ROUTE_HOME });
      }
    } catch (error) {
      alert("failed login: " + error);
    }
  };

  const authLogout = async () => {
    try {
      await services.authLogout();
      storages.clearStorage();
    } catch (error) {
      alert("failed logout: " + error);
    }
  };

  return {
    token,
    isCheckedAuth,
    authLogout,
    authLogin,
  };
};
