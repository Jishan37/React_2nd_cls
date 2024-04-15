import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contract from "../Pages/Contract/Contract";

export const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <MainLayout></MainLayout>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/about',
                    element: <About></About>
                },
                {
                    path: '/Contract',
                    element: <Contract></Contract>
                }


               

            ]
        }
    ]
)