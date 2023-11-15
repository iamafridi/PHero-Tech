import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Home = () => {

    const loadedProducts = useLoaderData();
    const [products, setProduct] = useState(loadedProducts)

    return (
        <div className="m-20">
            <h2 className="text-6xl text-center">Total Products : {products.length}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        products={products}
                        setProduct={setProduct}
                    ></ProductCard>)
                }
            </div>

        </div>
    );
};

export default Home;