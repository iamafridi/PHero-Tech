const ProductCard = ({ product }) => {

    const { name, image, image_url, Brand_name, category, price, description, rating } = product;


    return (
        <div className='overflow-hidden border rounded-lg has-shadow w-96'>
            <img src={image_url}
                className='aspect-video rounded-b-none'
                alt='' />
            <img src={image}
                className='aspect-video rounded-b-none'
                alt='' />
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
                   <span className='badge light info'>
                        {Brand_name}
                    </span>
                    <span className='badge light primary'>
                        {price}
                    </span>
                    <span className='badge light danger'>
                        {rating}
                    </span>
                   </div>
                    <div className="justify-end">
                    <div className="join join-vertical ">
                        <button className="btn join-item">View</button>
                        <button className="btn join-item">Edit</button>
                        <button className="btn join-item">x</button>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    );
};

export default ProductCard;