import React, { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom';
import Loader from './../components/loader/Loader';
import { color } from './../utilities/constants';

const routes = [
    {
        path: '',
        exact: true,
        component: lazy(() => import('./../pages/home/Home')),
    },
    {
        path: 'profile',
        exact: true,
        component: lazy(() => import('./../pages/profile/Profile')),
    },
]

export default function PageRouter() {
    const { url } = useRouteMatch();
    return (
        <Suspense fallback={<Loader color={color.primary} size='10px' isAbsolute='true' />}>
            <Switch>
                {routes.map((route, idx) => (
                    <Route exact={route.exact} key={idx} path={`${url}` + `${route.path}`}>
                        <route.component />
                    </Route>
                ))}
                {/* <Route 
                    exact
                    path='/'
                    render={() => {
                        return (
                            <Redirect to='/home' />
                        )
                    }}
                /> */}
            </Switch>
        </Suspense>
    );
}
