import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MySchedules = () => {

    const [bookings, setBookings] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [user.email])

    console.log(bookings);


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    bookings.map(booking => {
                        return (
                            <>
                                <div className="card bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center">
                                        <h2 className="card-title">{booking.serviceName}</h2>
                                        <p className="font-bold">Your Email: {booking.userEmail}</p>
                                        <p className="font-bold">Purchase Date: {booking.bookingDate}</p>
                                        <p className="font-bold">Address to Deliver: {booking.userAddress}</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
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