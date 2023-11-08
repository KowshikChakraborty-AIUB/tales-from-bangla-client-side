import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageServices = () => {
    const [services, setServices] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://local-tours-and-guide-server-side.vercel.app/services/myServices?email=${user.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [user.email])

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://local-tours-and-guide-server-side.vercel.app/services/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Your service is deleted successfully!",
                        icon: "success"
                    });
                }

                const remainingServices = services.filter(serviceRemaining => serviceRemaining._id !== id);
                setServices(remainingServices);
            })
    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                services.map(service => {
                    return (
                        <>
                            <div className="card shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={service.service_image} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center">
                                    <h2 className="card-title">{service.service_name}</h2>
                                    <p className="font-bold">{service.service_description}</p>
                                    <div className='flex gap-2'>
                                        <img className='h-7 rounded-full' src={service.service_provider_image} alt="" />
                                        <p className='font-bold'>
                                            {service.service_provider_name}
                                        </p>
                                    </div>
                                    <p className="font-bold">Price: {service.service_price}</p>
                                    <div className="card-actions gap-6">
                                        <Link to={`/updateManageServices/${service._id}`}>
                                            <button className="btn btn-success normal-case">Edit</button>
                                        </Link>
                                        <button onClick={() => handleDelete(service._id)} className="btn btn-success normal-case">Delete</button>
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