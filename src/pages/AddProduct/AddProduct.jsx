import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        // console.log(name);
        const image = form.image.value;
        const image_url = form.image_url.value;
        const Brand_name = form.Brand_name.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const newProduct = { name, image, image_url, Brand_name, category, price, description, rating }
        console.log(newProduct);

        // Sending data to the Backend
        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Product Added!",
                    text: "Your Product has been added.",
                    icon: "success"
                  });
            }
        })


    }



    return (
        <div className="bg-orange-200 p-24">
            <h2 className="text-3xl font-bold text-center">Add Product</h2>
            <form onSubmit={handleAddProduct}>
                <div className="grid grid-cols-2 gap-2">
                    {/* name  */}
                    <div>
                        <label className="label">
                            <span className="lable-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name here" className="input input-bordered  input-primary  w-1/2 md:w-full" />
                        </label>
                    </div>
                    {/* Image URL  */}
                    <div>
                        <label className="label">
                            <span className="lable-text">Image URl</span>
                        </label>
                        <label className="input-group ">
                            <input type="file" name="image" className="file-input file-input-bordered file-input-info w-1/2 md:w-full" />  </label>
                    </div>
                    {/* Image URL  */}
                    <div>
                        <label className="label">
                            <span className="lable-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image_url" placeholder=" Image URL here" className="input input-bordered input-primary w-1/2 md:w-full" />
                        </label>
                    </div>
                    {/* Brand name  */}
                    <div>
                        <label className="label">
                            <span className="lable-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Brand_name" placeholder=" Brand Name here" className="input input-bordered input-primary w-1/2 md:w-full" />
                        </label>
                    </div>
                    {/* Types  */}
                    <div>
                        <label className="label">
                            <span className="lable-text">Type</span>
                        </label>
                        <label className="input-group">
                            <select name="category" className="select select-warning  w-1/2 md:w-full">
                                <option disabled selected>Category</option>
                                <option>Phone</option>
                                <option>Computer</option>
                                <option>Headphone</option>
                                <option>Laptop</option>
                                <option>Monitor</option>
                            </select>
                        </label>
                    </div>
                    {/* Price  */}
                    <div>
                        <label className="label">
                            <span className="lable-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price here" className="input input-bordered input-primary  w-1/2 md:w-full" />
                        </label>
                    </div>
                    {/* Description  */}
                    <div>
                        <label className="label">
                            <span className="lable-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Short Description here" className="input input-bordered input-primary  w-1/2 md:w-full" />
                        </label>
                    </div>
                    {/* Rating  */}
                    <div className="rating  rating-md rating-half">
                        <h2 className="font-bold">Rating :</h2>
                        <input type="radio" name="rating" className="rating-hidden" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    </div>
                </div>

                <input type="submit" value="Add Product" className="btn btn-active btn-neutral w-full mt-5" />

            </form>


        </div>
    );
};

export default AddProduct;