import React from "react";
import {Route, Routes} from 'react-router-dom';
import {routes, routeType} from "../../services/routes/routes";

const Layout = (): JSX.Element => {
    return (
        <Routes>
            {routes.map((route: routeType, index: number): JSX.Element => {
                return <Route path={route.path} element={route.component} key={index}/>
            })}
        </Routes>
    )
}

export default Layout;
