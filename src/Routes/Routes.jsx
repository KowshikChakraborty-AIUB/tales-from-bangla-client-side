import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import PageNotFound from "../Pages/Page Not Found/PageNotFound";
import SingleServiceDetails from "../Pages/Single Service Details/SingleServiceDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sign Up/SignUp";
import MySchedules from "../Pages/My Schedules/MySchedules";
import AddServices from "../Pages/Add Services/AddServices";
import MyServices from "../Pages/My Services/MyServices";
import PrivateRoutes from "./PrivateRoutes";
import ManageServices from "../Pages/Manage Services/ManageServices";
import UpdateManageServices from "../Pages/Update Manage Services/UpdateManageServices";

const routes = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://local-tours-and-guide-server-side.vercel.app/services')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://local-tours-and-guide-server-side.vercel.app/services')
            },
            {
                path: '/single-service-details/:id',
                element: <PrivateRoutes><SingleServiceDetails></SingleServiceDetails></PrivateRoutes>,
                loader: () => fetch('https://local-tours-and-guide-server-side.vercel.app/services')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/mySchedules',
                element: <PrivateRoutes><MySchedules></MySchedules></PrivateRoutes>
            },
            {
                path: 'addServices',
                element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
            },
            {
                path: '/myServices',
                element: <PrivateRoutes><MyServices></MyServices></PrivateRoutes>
            },
            {
                path: '/manageServices',
                element: <PrivateRoutes><ManageServices></ManageServices></PrivateRoutes>
            },
            {
                path: '/updateManageServices/:id',
                element: <PrivateRoutes><UpdateManageServices></UpdateManageServices></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://local-tours-and-guide-server-side.vercel.app/services/${params.id}`)
            }
        ]
    }


])

export default routes;