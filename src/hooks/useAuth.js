import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as authActions from "../redux/auth/actions";
import * as storages from "../utils/storage";

export const useAuth = () => {
  const dispatch = useDispatch();
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

  const authLogin = (reqBody) => {
    dispatch(authActions.authLogin(reqBody));
  };

  const authRegister = (reqBody) => {
    dispatch(authActions.authRegister(reqBody));
  };

  const authLogout = () => {
    dispatch(authActions.authLogout());
  };

  return {
    token,
    isCheckedAuth,
    authLogout,
    authLogin,
    authRegister,
  };
};
