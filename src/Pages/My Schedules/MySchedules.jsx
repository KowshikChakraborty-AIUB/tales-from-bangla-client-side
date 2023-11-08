import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MySchedules = () => {

    const [bookings, setBookings] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`, {credentials: 'include'})
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [user.email])

    console.log(bookings);


    return (
        <div>
            <div className="pb-10">
                <p className="text-3xl font-bold">My Bookings</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    bookings.map(booking => {
                        return (
                            <>
                                <div className="card bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={booking.serviceImage} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center">
                                        <h2 className="card-title">{booking.serviceName}</h2>
                                        <p className="font-bold">Your Email: {booking.userEmail}</p>
                                        <p className="font-bold">Purchase Date: {booking.bookingDate}</p>
                                        <p className="font-bold">Your Address: {booking.userAddress}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MySchedules;