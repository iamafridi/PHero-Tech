import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/addProduct",
                element:<AddProduct></AddProduct>
            },
            {
                path:"/myCart",
                element:<MyCart></MyCart>
            }
        ]
    }
])

export default myCreatedRoute;