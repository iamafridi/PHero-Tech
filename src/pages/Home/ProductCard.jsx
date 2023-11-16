import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ product, products, setProducts }) => {

    const { _id, name, image_url, Brand_name, category, price, description, rating } = product;


    const handleDelete = _id => {
        console.log(_id);
        // Sweet Alert Start
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://phero-tech-server.vercel.app/products/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your Product has been deleted.",
                                icon: "success"
                            });
                            // eslint-disable-next-line react/prop-types
                            const remaining = products.filter(prod => prod._id !== _id)
                            setProducts(remaining);
                        }
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
        // Sweet Alert Ends Here
    }

    return (
        <div className='font-poppins overflow-hidden border rounded-lg has-shadow w-96'>
            <div className="items-center justify-center m-2">
                <img src={image_url}
                    className='aspect-video rounded-b-none w-96 h-fit '
                    alt='' />

            </div>
            <div className='p-4 flex flex-col gap-2'>
                <div className='text-xs'>
                    {category}
                </div>
                <h3 className='text-xl font-semibold'>
                    {name}
                </h3>
                <div className='text-sm'>
                    <p>
                        {description}
                    </p>
                </div>
                <div className='flex gap-2 justify-between items-center'>
                    <div>
                        <span className='badge p-4 bg-blue-500 text-white light info'>
                            {Brand_name}
                        </span>
                        <span className='badge bg-blue-100 p-4 light primary'>
                           $ {price}
                        </span>
                        <span className='badge light danger'>
                            {rating}
                        </span>
                    </div>
                    <div className="justify-end">
                        <div className="join join-vertical gap-2 ">
                            <Link to="myCart">
                                <button className="btn join-item bg-yellow-100">View</button></Link>
                            <Link to={`/updateProduct/${_id}`}>
                                <button className="btn bg-blue-200 join-item">Edit</button></Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn join-item bg-red-500 text-white">x</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;