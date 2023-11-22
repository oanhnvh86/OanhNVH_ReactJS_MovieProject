import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Detail from "../pages/detail/Detail";
import Booking from "../pages/booking/booking";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";
import AuthTemplate from "../templates/AuthTemplate/authtemplate";

//Setup router
export const router = createBrowserRouter([
    //Các pages dùng HomeTemplate
    {
        path:"home",
        element: <HomeTemplate/>,
        children: [
            {
                path: "",
                element: <Home/>
            }    
            ,
            {
                path: "detail/:id",
                element: <Detail />,
            },
            {
                path: "booking",
                element: <Booking />,
            },
        ]
    },
    //Các pages dùng AuthTemplate
    {
        path:"auth",
        element: <AuthTemplate/>,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
            path: "register",
            element: <Register />,
            },
        ]
    },
]);
