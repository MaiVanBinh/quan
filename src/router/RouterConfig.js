import React, { lazy, Suspense } from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Loader from './../components/loader/Loader';
import ErrorBoundary from './ErrorBoundary';
import { connect } from 'react-redux';

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

const privateRoutes = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('../pages/home/Home')),
    },
    {
        path: '/profile',
        exact: true,
        component: lazy(() => import('../pages/profile/Profile')),
    },
]

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
                    {privateRoutes.map((route, index) => {
                        return (
                            auth.token === null || auth.token === undefined || auth.token === '' ? 
                            <Redirect key={index} to='/signin' /> : 
                            <Route key={index} path={route.path} exact={route.exact}>
                                <route.component />
                            </Route>
                        )
                    })}
                </Switch>
            </Suspense>
        </ErrorBoundary>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RouterConfig);