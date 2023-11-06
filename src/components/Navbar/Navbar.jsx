import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navLinks =

        <>
            <NavLink to={'/'} className={({ isActive, isPending }) => isPending ? 'Pending' : isActive ? 'border-2 border-[#36D399] rounded hover:bg-[#36D399] hover:text-black' : ''}><li className="font-bold"><a>Home</a></li></NavLink>
            <NavLink to={'/services'} className={({ isActive, isPending }) => isPending ? 'Pending' : isActive ? 'border-2 border-[#36D399] rounded hover:bg-[#36D399] hover:text-black' : ''}><li className="font-bold"><a>Services</a></li></NavLink>
        </>

    const handleLogOut = () => {
        logOut()
            .then(userCredentials => {
                toast.success('You logged out successfully!')
                console.log(userCredentials.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                        <li>
                            <NavLink to={'/services'} className={({ isActive, isPending }) => isPending ? 'Pending' : isActive ? 'border-2 border-[#36D399] rounded hover:bg-[#36D399] hover:text-black' : ''}><a className="font-bold">Dashboard</a></NavLink>
                            <ul className="p-2">
                                <NavLink to={'/my-services'}><li><a className="font-bold">My Services</a></li></NavLink>
                                <NavLink to={'/add-services'}><li><a className="font-bold">Add Services</a></li></NavLink>
                                <NavLink to={'/my-schedules'}><li><a className="font-bold">My Schedules</a></li></NavLink>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img className="h-16 rounded-full" src="https://i.ibb.co/g64cB9S/tales-from-bangla-logo.jpg" alt="" />
                    <p className="normal-case text-xl font-bold"><span className="text-[#36D399]">Tales</span> From <span className="text-red-500">Bangla</span></p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    <li tabIndex={0}>
                        <details>
                            <summary className="font-bold">
                                <NavLink to={'/my-services'} className={({ isActive, isPending }) => isPending ? 'Pending' : isActive ? 'border-2 border-[#36D399] rounded hover:bg-[#36D399] hover:text-black' : ''}>
                                    <div>
                                        Dashboard
                                    </div>
                                </NavLink>
                            </summary>
                            <ul className="p-2">
                                <NavLink to={'/my-services'}><li><a className="font-bold">My Services</a></li></NavLink>
                                <NavLink to={'/add-services'}><li><a className="font-bold">Add Services</a></li></NavLink>
                                <NavLink to={'/my-schedules'}><li><a className="font-bold">My Schedules</a></li></NavLink>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user
                        ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL ? user.photoURL : 'https://i.ibb.co/j4rcpWk/user-default.png'} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    {user.displayName}
                                </li>
                                <li>
                                    <Link to={'/login'} onClick={handleLogOut}>
                                        <a >Logout</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        :
                        ''
                }
                {
                    user
                        ?
                        <Link to={'/login'} onClick={handleLogOut}>
                            <a className="btn btn-success normal-case">Logout</a>
                        </Link>
                        :
                        <Link to={'/login'}>
                            <a className="btn btn-success normal-case">Login</a>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;