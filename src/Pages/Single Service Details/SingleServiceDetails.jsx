import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleServiceDetails = () => {
    const [singleService, setSingleService] = useState({})

    const singleServiceId = useParams();

    const singleServiceData = useLoaderData();

    useEffect(() => {
        const singleService = singleServiceData.find(service => service._id == singleServiceId.id)
        setSingleService(singleService);
    }, [singleServiceData, singleServiceId.id])

    return (
        <div>
            <div className="py-20">
                <p className="text-5xl font-bold pb-10">Provider: {singleService.service_provider_name}</p>
                <img src="" alt="" />
                <p className="text-2xl font-bold">Area:</p>

            </div>
            <div className="card card-side bg-base-100 shadow-xl flex-col">
                <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{singleService.service_name}</h2>
                    <p className='font-semibold'>{singleService.service_description}</p>
                    <p className='font-semibold'>Provider: {singleService.service_provider_name}</p>
                    <p className='font-semibold'>Price: {singleService.service_price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success normal-case">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceDetails;