import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2';
const SingleServiceDetails = () => {
    const [singleService, setSingleService] = useState({})

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

        const bookings = { serviceName, userEmail, bookingDate, userAddress }

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
        </div>
    );
};

export default SingleServiceDetails;