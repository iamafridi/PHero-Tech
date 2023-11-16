import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);



        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            // New User Created
            const createdAt = result.user?.metadata?.creationTime;
            const user ={email ,createdAt:createdAt};
            fetch('http://localhost:5000/user',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
            })
        })
        .catch(error=>{
            console.error(error);
        })
    }

    return (

        <div className="font-poppins">

            <div className="hero  min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">EXPLORE, LEARN AND GROW</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            {/* name  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    name="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    name="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;