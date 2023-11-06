import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const PageNotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <img className="mx-auto" src="https://i.ibb.co/3cDWFXc/local-tours-404.jpg" alt="" />
            </div>
            <div className="text-center text-3xl font-bold pb-10">
                OOps! Sorry, Page Not Found! Please go back to our Home Page.
            </div>
            <div className="text-center">
                <Link to={'/'}>
                    <button className="btn btn-success normal-case">Go Back</button>
                </Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PageNotFound;