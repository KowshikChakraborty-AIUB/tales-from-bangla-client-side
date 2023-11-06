import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import PageNotFound from "../Pages/Page Not Found/PageNotFound";
import SingleServiceDetails from "../Pages/Single Service Details/SingleServiceDetails";

const routes = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/single-service-details/:id',
                element: <SingleServiceDetails></SingleServiceDetails>,
                loader: () => fetch('http://localhost:5000/services')
            }
        ]
    }


])

export default routes;