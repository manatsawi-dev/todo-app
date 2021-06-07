import * as TYPES from "./types";
import * as API from "./api";
import * as ROUTES from "../../routes/routes-name";
import * as storages from "../../utils/storage";
import * as navigationServices from "../../utils/navigation-services";

export const authLogin = (reqBody) => async (dispatch) => {
  dispatch({ type: TYPES.AUTH_LOGIN_REQ });
  try {
    const response = await API.authLogin(reqBody);
    if (!response?.success) {
      const payload = {
        user: { email: reqBody.email },
        token: response.token,
      };
      dispatch({ type: TYPES.AUTH_LOGIN_SUCCESS, payload });
      await storages.saveAuthToken(response.token);
      navigationServices.navigateReplaceTo({ pathname: ROUTES.ROUTE_HOME });
    }
    if (response?.error) {
      throw new Error(response.error);
    }
  } catch (error) {
    dispatch({ type: TYPES.AUTH_LOGIN_FAIL, payload: error?.toString() });
  }
};

export const authRegister = (reqBody) => async (dispatch) => {
  dispatch({ type: TYPES.AUTH_REGISTER_REQ });
  try {
    const response = await API.authRegister(reqBody);
    if (response?.success) {
      const payload = {
        user: { email: reqBody.email },
        token: response.token,
      };
      dispatch({ type: TYPES.AUTH_REGISTER_SUCCESS, payload });
      await storages.saveAuthToken(response.token);
      navigationServices.navigateReplaceTo({ pathname: ROUTES.ROUTE_HOME });
    }
    if (response?.error) {
      throw new Error(response.error);
    }
  } catch (error) {
    dispatch({ type: TYPES.AUTH_REGISTER_FAIL, payload: error?.toString() });
  }
};

export const authLogout = () => async (dispatch) => {
  dispatch({ type: TYPES.AUTH_LOGOUT_REQ });
  try {
    const token = await storages.getAuthToken();
    const response = await API.authLogout(token);
    if (response?.success) {
      dispatch({ type: TYPES.AUTH_LOGOUT_SUCCESS });
      storages.clearStorage();
    }
    if (response?.error) {
      throw new Error(response.error);
    }
  } catch (error) {
    dispatch({ type: TYPES.AUTH_LOGOUT_FAIL, payload: error?.toString() });
  }
};
