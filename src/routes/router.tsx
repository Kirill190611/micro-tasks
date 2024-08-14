import * as React from "react";
import {
    createBrowserRouter, Navigate, Outlet, RouteObject,
} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {Login} from "../components/pages/Login";

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    PROTECTED_PAGE: '/protected-page',
    MODEL: '/:model/:id',
    ERROR: '/error',
    LOGIN: '/login',
} as const

const publicRouters: RouteObject[] = [
    {
        index: true,
        element: <Navigate to={PATH.ADIDAS}/>,
    },
    {
        path: PATH.ADIDAS,
        element: <Adidas/>,
    },
    {
        path: PATH.PUMA,
        element: <Puma/>,
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas/>,
    },
    {
        path: PATH.PRICES,
        element: <Prices/>,
    },
    {
        path: PATH.MODEL,
        element: <Model/>,
    },
    {
        path: PATH.ERROR,
        element: <Error404/>,
    },
    {
        path: PATH.LOGIN,
        element: <Login/>,
    },
]

const privateRouters: RouteObject[] = [
    {
        path: PATH.PROTECTED_PAGE,
        element: <ProtectedPage/>
    },
]

export const PrivateRoutes = () => {
    const isAuth = false;
    return isAuth ? <Outlet/> : <Navigate to={PATH.LOGIN}/>
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            {
                element: <PrivateRoutes/>,
                children: privateRouters,
            },
            ...publicRouters,
        ],
    }
])
