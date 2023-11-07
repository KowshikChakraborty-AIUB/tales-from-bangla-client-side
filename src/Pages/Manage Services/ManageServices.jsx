import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const ManageServices = () => {
    const [services, setServices] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [user.email])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                services.map(service => {
                    return (
                        <>
                            <div className="card shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center">
                                    <h2 className="card-title">{service.service_name}</h2>
                                    <p className="font-bold">{service.service_description}</p>
                                    <p className="font-bold">Provider: {service.service_provider_name}</p>
                                    <p className="font-bold">Price: {service.service_price}</p>
                                    <div className="card-actions gap-6">
                                        <Link to={`/updateManageServices/${service._id}`}>
                                            <button className="btn btn-success normal-case">Edit</button>
                                        </Link>
                                        <button className="btn btn-success normal-case">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    );
};

export default ManageServices;