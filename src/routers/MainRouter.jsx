import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import OLXHomepage from "../pages/home";
import ProductDetailPage from "../pages/ProductDetailPage";
import SellPage from "../pages/sell";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import ViewAll from "../pages/ViewAll";
import UserProfile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <OLXHomepage />,
    },
    {
        path: "/login",
        element: (
            <PublicRouter>
                <Login />
            </PublicRouter>
        ),
    },
    {
        path: "/signup",
        element: (
            <PublicRouter>
                <Signup />
            </PublicRouter>
        ),
    },
    {
        path: "/sell",
        element: (
            <PrivateRouter>
                <SellPage />
            </PrivateRouter>
        ),
    },
    {
        path: "/product/:id",
        element: (
            <PrivateRouter>
                <ProductDetailPage />
            </PrivateRouter>
        ),
    },
    {
        path: "/viewAll",
        element: (
            <PrivateRouter>
                <ViewAll />
            </PrivateRouter>
        ),
    },
    {
        path: "/profile",
        element: (
            <PrivateRouter>
                <UserProfile />
            </PrivateRouter>
        ),
    },
]);
export const MainRouter = () => {
    return <RouterProvider router={router} />;
};
