import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Users from "../components/Header/users/Users";
import PrivateRoute from "../pages/Providers/PrivateRoute";
import ErrorPage from "../pages/Error/ErrorPage";
import AboutUs from "../components/About/AboutUs";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=> fetch('http://localhost:5000/products')
            },
            {
                path:"/addProduct",
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:"/about",
                element:<AboutUs></AboutUs>
            },
            {
                path:"/signin",
                element:<SignIn></SignIn>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:"/myCart",
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: ()=> fetch('http://localhost:5000/products')
            },
            {
                path:"/updateProduct/:id",
                element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/users",
                element:<PrivateRoute><Users></Users></PrivateRoute>,
                loader:()=> fetch('http://localhost:5000/user')
            }
        ]
    }
])

export default myCreatedRoute;