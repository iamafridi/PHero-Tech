import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Users from "../components/Header/users/Users";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=> fetch('http://localhost:5000/products')
            },
            {
                path:"/addProduct",
                element:<AddProduct></AddProduct>
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
                element:<MyCart></MyCart>
            },
            {
                path:"/updateProduct/:id",
                element:<UpdateProduct></UpdateProduct>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/users",
                element:<Users></Users>,
                loader:()=> fetch('http://localhost:5000/user')
            }
        ]
    }
])

export default myCreatedRoute;