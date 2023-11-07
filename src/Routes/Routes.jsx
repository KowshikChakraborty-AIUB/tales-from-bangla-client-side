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
                element: <MySchedules></MySchedules>
            },
            {
                path: 'addServices',
                element: <AddServices></AddServices>
            }
        ]
    }


])

export default routes;