import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../redux/auth/actions";
import * as storages from "../utils/storage";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [isCheckedAuth, setIsCheckedAuth] = useState(false);
  const [token, setToken] = useState("");
  const authState = useSelector((state) => state.auth.user);

  useEffect(() => {
    const getToken = async () => {
      const tokenStore = await storages.getAuthToken();
      setToken(tokenStore);
      setIsCheckedAuth(true);
    };
    getToken();
  }, []);

  const dispatchAuthLogin = (reqBody) => {
    dispatch(authActions.authLogin(reqBody));
  };

  const dispatchAuthRegister = (reqBody) => {
    dispatch(authActions.authRegister(reqBody));
  };

  const dispatchAuthLogout = () => {
    dispatch(authActions.authLogout());
  };

  return {
    token,
    isCheckedAuth,
    authState,
    dispatchAuthLogout,
    dispatchAuthLogin,
    dispatchAuthRegister,
  };
};
