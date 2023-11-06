import { useLoaderData } from "react-router-dom";
import WellKnownServices from "../../components/Well Known Services/WellKnownServices";

const Services = () => {

    const services = useLoaderData();

    return (
        <div className="grid grid-cols-1 gap-6 py-20">
            {
                services.map(service => <WellKnownServices service={service} key={service._id}></WellKnownServices>)
            }
        </div>
    );
};

export default Services;