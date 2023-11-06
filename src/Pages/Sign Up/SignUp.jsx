import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const { signUp, userProfile } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();


    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        
        if (password.length < 6) {
            toast.error('Password should have at least 6 characters.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password should have at least one capital letter.')
            return;
        }
        if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>?~]/.test(password)) {
            toast.error('Password should have at least one special character.')
            return;
        }

        signUp(email, password)
            .then(userCredentials => {
                console.log(userCredentials.user);
                e.target.reset();
                navigate(location?.state ? location.state : '/');
                toast.success('Your account has been created successfully!');

                userProfile(userCredentials.user, name, photoURL)
                    .then(() => {
                        console.log('Updated successfully!');
                    })

            })
            .catch(error => {
                toast.error(error.message);
            })

    }

    return (
        <div>
            <div className="text-center pt-20">
                <h1 className="text-5xl font-bold">Sign up hurry to get your memorable adventure!</h1>
            </div>
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photo url" className="input input-bordered"/>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success normal-case">Sign Up</button>
                            </div>
                            <div>
                                <p className="font-bold">
                                    Already have an account?
                                    <Link to={'/login'} className="text-[#36D399] font-bold ml-2">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    <img src="https://i.ibb.co/fSgBzS3/local-tours-login-register.jpg" alt="" />
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;