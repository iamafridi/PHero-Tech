import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";

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
                path:"/myCart",
                element:<MyCart></MyCart>
            },
            {
                path:"/updateProduct/:id",
                element:<UpdateProduct></UpdateProduct>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }
])

export default myCreatedRoute;