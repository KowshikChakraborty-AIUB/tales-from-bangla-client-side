import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks =

        <>
            <NavLink to={'/'} className={({ isActive, isPending }) => isPending ? 'Pending' : isActive ? 'border-2 border-green-600 rounded hover:bg-green-600 hover:text-black' : ''}><li className="font-bold"><a>Home</a></li></NavLink>
            <NavLink to={'/services'} className={({ isActive, isPending }) => isPending ? 'Pending' : isActive ? 'border-2 border-green-600 rounded hover:bg-green-600 hover:text-black' : ''}><li className="font-bold"><a>Services</a></li></NavLink>
        </>


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
                            <NavLink to={'/services'} className={({ isActive, isPending }) => isPending ? 'Pending' : isActive ? 'border-2 border-green-600 rounded hover:bg-green-600 hover:text-black' : ''}><a className="font-bold">Dashboard</a></NavLink>
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
                    <p className="normal-case text-xl font-bold"><span className="text-green-600">Tales</span> From <span className="text-red-600">Bangla</span></p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    <li tabIndex={0}>
                        <details>
                            <summary className="font-bold">
                                <NavLink to={'/services'} className={({ isActive, isPending }) => isPending ? 'Pending' : isActive ? 'border-2 border-green-600 rounded hover:bg-green-600 hover:text-black' : ''}>
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
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;