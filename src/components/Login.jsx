import { Link } from "react-router-dom";

export default function Login() {
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
    }
    return (


        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10">
            <form className="card-body" onSubmit={handleLogin}>
                <h3 className="text-xl font-semibold text-center">Log in</h3>
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-3">
                    <button className="btn btn-primary">Login</button>
                    <p className="mt-2 text-center">Dont have account? <Link to='/signup' className="font-bold text-primary">Sign Up</Link> </p>
                </div>
            </form>
        </div>

    )
}
