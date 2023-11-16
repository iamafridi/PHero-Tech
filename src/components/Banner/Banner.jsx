import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="font-poppins mb-5">
            <section className="bg-gray-100 text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl">Welcome to 
				<span className="text-orange-600"> PHERO_TECH</span> World
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">PHERO TECH is you everyday go tech house
				<br className="hidden md:inline lg:hidden"/>assembled with the latest tech you need 
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to="/signin"><button rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-orange-600 text-gray-50">Get Started</button></Link>
				<Link to="/about"><button rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Learn More</button></Link>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://i.ibb.co/dcqpCN0/design-img.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
        </div>
    );
};

export default Banner;