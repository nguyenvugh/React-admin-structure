import React from "react";
import { ROUTER } from "../constants/routes.constants";
import { RoutesConfig } from "../interfaces/common.interfaces";
// import pathName

// import lazy loading components
export const LoginPage = React.lazy(() => import("src/login/components/index"));
const Dictionary = React.lazy(() => import("src/dictionary/components/index"));
const Authorization = React.lazy(() => import("src/authorization/components/index"));

const { DICTIONARY_PAGE, LOGIN_PAGE, HOME_PAGE, AUTHORIZATION } = ROUTER;

export const ROUTES_CONFIG: RoutesConfig[] = [
  // Login page
  {
    pathName: LOGIN_PAGE,
    resource: "all",
    component: LoginPage,
    routes: [],
  },
  // Home page here...
  {
    pathName: HOME_PAGE,
    resource: "all",
    component: LoginPage,
    routes: [
      {
        pathName: AUTHORIZATION,
        resource: "all",
        component: Authorization,
        routes: [],
      },
      {
        pathName: DICTIONARY_PAGE,
        resource: "all",
        component: Dictionary,
        routes: [],
      },
    ],
  },
];
