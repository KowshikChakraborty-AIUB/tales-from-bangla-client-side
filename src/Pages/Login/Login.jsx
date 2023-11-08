import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { login, googleLogIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        login(email, password)
            .then(userCredentials => {
                console.log(userCredentials.user);
                e.target.reset();
                navigate(location?.state ? location.state : '/');
                toast.success('You logged in successfully!');

            })
            .catch(error => {
                toast.error(error.message);
            })

    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(userCredentials => {
                console.log(userCredentials.user);
                toast.success('You logged in successfully!');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className="text-center pt-20">
                <h1 className="text-5xl font-bold">Login now to feel the adventure!</h1>
            </div>
            <div>
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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
                                    <button onClick={handleGoogleLogIn} className="btn normal-case border-2 border-[#36D399] hover:border-[#36D399] hover:bg-none w-full my-4 text-black"><FcGoogle/> Login with Google</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/fSgBzS3/local-tours-login-register.jpg" alt="" />
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;