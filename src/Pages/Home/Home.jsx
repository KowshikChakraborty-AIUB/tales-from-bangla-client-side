import AboutUs from "../../components/About Us/AboutUs";
import Banner from "../../components/Banner/Banner";
import WellKnownServices from "../../components/Well Known Services/WellKnownServices";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <div className="pt-20">
                <p className="text-center text-5xl font-bold pb-10">
                    Our Well Known Services
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        services.slice(0, 4).map(service => <WellKnownServices service={service} key={service._id}></WellKnownServices>)
                    }
                </div>
                <div className="pt-5 text-center">
                    <Link to={'/services'}>
                        <button className="btn btn-success normal-case">Show All</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Home;