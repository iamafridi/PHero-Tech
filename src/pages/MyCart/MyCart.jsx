import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCartProduct from "./MyCartProduct";
import MyCartSlider from "./MyCartSlider";

const MyCart = () => {
    
    const loadedProducts = useLoaderData();
    const [products, setProduct] = useState(loadedProducts)
    return (
        <div>
            <MyCartSlider></MyCartSlider>
            <div className="grid items-center justify-center grid-cols-1 md:grid-cols-1 gap-5 lg:grid-cols-2">
                {
                    products.map(product => <MyCartProduct
                        key={product._id}
                        product={product}
                        products={products}
                        setProduct={setProduct}
                    ></MyCartProduct>)
                }
            </div>
        </div>
    );
};

export default MyCart;