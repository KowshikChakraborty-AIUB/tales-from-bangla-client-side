import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2';
import OtherServicesByProvider from "../../components/Other Services By Provider/OtherServicesByProvider";
const SingleServiceDetails = () => {
    const [singleService, setSingleService] = useState({})
    const [otherServices, setOtherServices] = useState([])

    const { user } = useContext(AuthContext);

    const singleServiceId = useParams();

    const singleServiceData = useLoaderData();

    useEffect(() => {
        const singleService = singleServiceData.find(service => service._id == singleServiceId.id)
        setSingleService(singleService);
    }, [singleServiceData, singleServiceId.id])

    const handleBoookings = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const userEmail = form.userEmail.value;
        const bookingDate = form.bookingDate.value;
        const userAddress = form.userAddress.value;
        const serviceImage = singleService.service_image;

        const bookings = { serviceImage, serviceName, userEmail, bookingDate, userAddress }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "You purchased this service!",
                        text: "Check your My Schedules page to see your purchase",
                        icon: "success"
                    });
                }
            })
    }

    useEffect(() => {
        const otherServicesByEmail = singleServiceData.filter(service => service?.service_provider_email === singleService?.service_provider_email)
        setOtherServices(otherServicesByEmail);
        console.log(otherServicesByEmail);
    }, [singleService.service_provider_email, singleServiceData])

    // console.log(otherServices);

    return (
        <div>
            <div className="py-20">
                <p className="text-5xl font-bold pb-10">Provider: {singleService.service_provider_name}</p>
                <img src="" alt="" />
                <p className="text-2xl font-bold">Area: {singleService.service_area}</p>

            </div>
            <div className="card card-side bg-base-100 shadow-xl flex-col">
                <figure><img className='h-4/5 w-4/5' src={singleService.service_image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{singleService.service_name}</h2>
                    <p className='font-semibold'>{singleService.service_description}</p>
                    <div className='flex gap-2'>
                        <img className='h-7 rounded-full' src={singleService.service_provider_image} alt="" />
                        <p className='font-bold'>
                            {singleService.service_provider_name}
                        </p>
                    </div>
                    <p className='font-semibold'>Price: {singleService.service_price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success normal-case" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <form onSubmit={handleBoookings}>
                                    <div>
                                        <input className="font-bold text-lg" type="text" name="serviceName" defaultValue={singleService.service_name} readOnly />
                                    </div>
                                    <div>
                                        <span className="font-semibold">Your Email: </span>
                                        <input className="py-4 font-semibold" type="email" name="userEmail" defaultValue={user && user.email} readOnly />
                                    </div>
                                    <div className="py-4">
                                        <span className="font-semibold">Booking Date: </span>
                                        <input type="date" name="bookingDate" id="" required />
                                    </div>
                                    <div className="py-4">
                                        <span className="font-semibold">Your Address: </span>
                                        <input className="border-2 border-black rounded" type="text" name="userAddress" id="" required />
                                    </div>
                                    <div className="text-center pt-10">
                                        <button className="btn btn-success normal-case">Purchase</button>
                                    </div>
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn btn-success normal-case">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>

            <div>
                <p className={`text-3xl font-bold text-center py-20 ${otherServices.length === 1 && 'hidden'}`}>Also see other services of this provider</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        otherServices.length === 1
                            ?
                            ''
                            :
                            otherServices?.map(otherService => <OtherServicesByProvider key={otherService._id} otherService={otherService}></OtherServicesByProvider>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleServiceDetails;