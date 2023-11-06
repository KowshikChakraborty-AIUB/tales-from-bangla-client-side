import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="text-center pt-20">
                <h1 className="text-5xl font-bold">Login now to feel the adventure!</h1>
            </div>
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success normal-case">Login</button>
                            </div>
                            <div>
                                <p className="font-bold">
                                    Don&apos;t have an account?
                                    <Link to={'/signUp'} className="text-[#36D399] font-bold ml-2">
                                        Sign Up
                                    </Link>
                                </p>
                                <div className="text-center">
                                    <button className="btn normal-case border-2 border-[#36D399] hover:border-[#36D399] hover:bg-none w-full my-4 text-black">Sign in with Google</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <img src="https://i.ibb.co/fSgBzS3/local-tours-login-register.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;