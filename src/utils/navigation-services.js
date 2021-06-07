import React from "react";
import queryString from "querystring";
import * as routes from "../routes/routes-name";

export const navigationRef = React.createRef();

export const navigateTo = ({ pathname, state = {}, search }) => {
  if (!navigationRef.current) {
    return;
  }
  if (!pathname) {
    navigationRef.current.history.push(routes.ROUTE_HOME);
  }
  navigationRef.current.history.push({
    pathname: pathname,
    state: { ...state },
    search: queryString.stringify(search) || "",
  });
};

export const navigateReplaceTo = ({ pathname, state = {}, search }) => {
  if (!navigationRef.current) {
    return;
  }
  if (!pathname) {
    navigationRef.current.history.replace(routes.ROUTE_HOME);
  }
  navigationRef.current.history.replace({
    pathname: pathname,
    state: { ...state },
    search: queryString.stringify(search) || "",
  });
};

export const goBack = () => {
  if (!navigationRef.current) {
    return;
  }
  if (navigationRef.current.history?.action === "POP") {
    navigationRef.current.history.replace(routes.ROUTE_HOME);
    return;
  }
  navigationRef.current.history.goBack();
};

export const goBackToTop = () => {};

export const getCurrentPathname = () => {
  if (!navigationRef.current) {
    return null;
  }
  return navigationRef.current.history?.location?.pathname;
};

export const windowNavigateTo = ({ pathname }) => {
  if (!pathname) {
    return;
  }
  window.location = `${pathname}`;
};
