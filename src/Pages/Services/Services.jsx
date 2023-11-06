import { useLoaderData } from "react-router-dom";
import WellKnownServices from "../../components/Well Known Services/WellKnownServices";
import { useEffect, useState } from "react";

const Services = () => {

    const data = useLoaderData();

    const [services, setServices] = useState([]);

    const [length, setLength] = useState(2);

    useEffect(() => {
        setServices(data);
    }, [data])

    const [search, setSearch] = useState('');

    const handleInputSearchValue = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue)

    }

    const handleSearchByServiceName = (e) => {
        e.preventDefault();
        const searchByName = services.filter(serviceData => serviceData.service_name === search)
        setServices(searchByName);

    }

    return (
        <div>
            <div className="text-center text-5xl font-bold pb-10 pt-20">
                <p>Search Services</p>
            </div>
            <div className="flex justify-center gap-2">
                <input onChange={handleInputSearchValue} name="search" className="w-4/5 h-full px-7 py-4 text-black border-2 border-[#36D399] rounded" type="text" placeholder="Search by name here..." />
                <button onClick={handleSearchByServiceName} className="bg-[#36D399] rounded-lg font-semibold px-7 py-4">Search</button>
            </div>
            <div className="grid grid-cols-1 gap-6 py-20">
                {
                    services.slice(0, length).map(service => <WellKnownServices service={service} key={service._id}></WellKnownServices>)
                }
            </div>
            <div className={`flex justify-center ${length === services.length && 'hidden'}`}>
                <button onClick={() => setLength(services.length)} className="btn btn-success normal-case px-7 py-4">More</button>
            </div>
        </div>
    );
};

export default Services;