import React, { lazy, Suspense } from 'react';
import {
    Switch,
    Route,
    Redirect,
    useLocation
} from "react-router-dom";
import Loader from './../components/loader/Loader';
import ErrorBoundary from './ErrorBoundary';
import { connect, useSelector } from 'react-redux';

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const publicRoutes = [
    {
        path: '/signin',
        exact: true,
        component: lazy(() => import('./../pages/signin/SignIn')),
    },
]

function PrivateRoute({ children, ...rest }) {
    let location = useLocation();
    const isLoggedIn = useSelector(state => state.auth.token);
    if (isLoggedIn) return <Route {...rest}>{children}</Route>;
    return (
        <Redirect
            to={{
                pathname: '/signin',
                state: { from: location },
            }}
        />
    );
}

const Container = lazy(() => import('../components/layout/Container'));

const RouterConfig = (props) => {
    const {
        auth
    } = props;
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader color='#2c2c54' size='10px' isAbsolute='true' />}>
                <Switch>
                    {publicRoutes.map((route, index) => {
                        return (
                            <Route key={index} path={route.path} exact={route.exact}>
                                <route.component />
                            </Route>
                        )
                    })}
                    <PrivateRoute path='/'>
                        <Container />
                    </PrivateRoute>
                </Switch>
            </Suspense>
        </ErrorBoundary>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RouterConfig);