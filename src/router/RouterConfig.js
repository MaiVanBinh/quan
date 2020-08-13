import React, { lazy, Suspense } from 'react';
import {
    Switch,
    Route,
    Redirect,
    useLocation
} from "react-router-dom";
import Loader from './../components/loader/Loader';
import ErrorBoundary from './ErrorBoundary';

const publicRoutes = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('./../pages/home/Home')),
    },
    {
        path: '/profile',
        exact: true,
        component: lazy(() => import('../pages/profile/Profile')),
    },
]

// function PrivateRoute({ children, ...rest }) {
//     let location = useLocation();
//     const isLoggedIn = useSelector(state => state.auth.idToken);
//     if (isLoggedIn) return <Route {...rest}>{children}</Route>;
//     return (
//         <Redirect
//             to={{
//                 pathname: '/signin',
//                 state: { from: location },
//             }}
//         />
//     );
// }

const RouterConfig = () => {
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
                    {/* <PrivateRoute path="/private-route">
                        // load component private here
                    </PrivateRoute> */}
                </Switch>
            </Suspense>
        </ErrorBoundary>
    )
}

export default RouterConfig;