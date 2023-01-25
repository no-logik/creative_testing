import React from "react";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";

import * as URL from "./urls";
import Login from "../pages/Login/index";
import Admin from "../pages/Admin/index";
import Dashboard from "../pages/Dashboard/index";
import Assets from "../pages/Assets/index";
import DashboardListing from "../pages/DashboardListing/index";
import SelectCreative from "../pages/SelectCreative/index";
import Performance from "../pages/Performance/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={URL.URL_HOME} element={<Outlet />}>
      <Route path={URL.URL_LOGIN} element={<Login />} />
      <Route path={URL.URL_ADMIN} exact={true} element={<Admin />} />
      <Route path={URL.URL_DASHBOARD} exact={true} element={<Dashboard />} />

      <Route
        path={URL.URL_DASHBOARDLISTING}
        exact={true}
        element={<DashboardListing />}
      />
      <Route path={URL.URL_ASSETS} exact={true} element={<Assets />} />
      <Route path={URL.URL_SELECTCREATIVE} exact={true} element={<SelectCreative />} />
      <Route path={URL.URL_PERFORMANCE} exact={true} element={<Performance />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
