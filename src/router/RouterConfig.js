import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "./../components/loader/Loader";
import ErrorBoundary from "./ErrorBoundary";

const Container = lazy(() => import("../components/layout/Container"));

const RouterConfig = (props) => {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={<Loader color="#2c2c54" size="10px" isAbsolute="true" />}
      >
        <Switch>
          <Route path="/danh-sach-du-an" exact={true}>
            <Container />
          </Route>
          <Route path="/tao-moi" exact={true}>
            <Container />
          </Route>
          <Route exact path="/">
            <Redirect to="/danh-sach-du-an" />
          </Route>
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};

export default RouterConfig;
