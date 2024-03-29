import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../pages/Providers/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleSignOut = () => {
        logout()
            .then(() => console.log('LOGGED OUT SUCCESSFULLY'))
            .catch(error => console.error(error))

    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
        {/* <li><NavLink to="/updateProduct">Update Product</NavLink></li> */}
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/signin">Signin</NavLink></li>
        <li><NavLink to="/signup">SignUp</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 font-poppins">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {navLinks}
                    </ul>
                </div>
                <Link to="/"><button className="btn btn-ghost text-xl ">PHero-Tech</button></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">

                {
                    user ?
                        <button onClick={handleSignOut} className="btn">SignOut</button>
                        :
                        <Link to="/signin">
                            <button className="btn">SignIn</button></Link>
                }


            </div>
        </div>
    );
};

export default Navbar;