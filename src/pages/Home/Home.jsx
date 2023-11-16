import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";
import Banner from "../../components/Banner/Banner";

const Home = () => {

    const loadedProducts = useLoaderData();
    const [products, setProduct] = useState(loadedProducts)

    return (
     
        <div className="m-20 font-poppins">
               <Banner></Banner>
            <h2 className="text-3xl text-center font-bold mb-10">Total Available Products : {products.length}</h2>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-5 lg:grid-cols-2">
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