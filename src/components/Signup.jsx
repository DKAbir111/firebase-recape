import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/Context";

const Signup = () => {

    const { createUser } = useContext(AuthContext)
    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            }).catch(error => {
                console.error('ERROR', error.message)
            })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10">

            <form className="card-body" onSubmit={handleSignUp}>
                <h3 className="text-center font-semibold text-xl">Sign up</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                    <p className="mt-2 text-center">Already have an account?
                        <Link to='/login' className="font-bold text-primary"> Login</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;