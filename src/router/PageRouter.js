import React, { lazy, Suspense, useEffect } from "react";
import { Route, useRouteMatch, Switch, Redirect } from "react-router-dom";
import Loader from "./../components/loader/Loader";
import { color } from "./../utilities/constants";

const routes = [
  {
    path: "/danh-sach-du-an",
    exact: true,
    component: lazy(() => import("../pages/Projects/Projects")),
  },
  {
    path: "/tao-moi",
    exact: true,
    component: lazy(() => import("./../pages/Create/Create")),
  },
];

export default function PageRouter() {

  const { url } = useRouteMatch();
  return (
    <Suspense
      fallback={<Loader color={color.primary} size="10px" isAbsolute="true" />}
    >
      <Switch>
        {routes.map((route, idx) => (
          <Route
            exact={route.exact}
            key={idx}
            path={route.path}
          >
            <route.component />
          </Route>
        ))}
        <Route exact path="/">
          <Redirect to="/danh-sach-du-an" />
        </Route>
      </Switch>
    </Suspense>
  );
}
