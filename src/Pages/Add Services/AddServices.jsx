import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddServices = () => {

    const { user } = useContext(AuthContext);


    const handleAddServices = (e) => {
        e.preventDefault();
        const form = e.target;
        const service_name = form.service_name.value;
        const service_image = form.service_image.value;
        const service_provider_name = form.service_provider_name.value;
        const service_provider_email = form.service_provider_email.value;
        const service_provider_image = form.service_provider_image.value;
        const service_price = form.service_price.value;
        const service_area = form.service_area.value;
        const service_description = form.service_description.value;

        const addServices = { service_name, service_image, service_provider_name, service_provider_email, service_provider_image, service_price, service_area, service_description }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addServices)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Your service is added!",
                        text: "Check your My Services page & also Services page to see your added services",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div>
            <div className="text-center pt-20">
                <h1 className="text-5xl font-bold">Add a service and work with us!</h1>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleAddServices} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="text" name="service_name" placeholder="service name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Image URL</span>
                                </label>
                                <input type="text" name="service_image" placeholder="service image url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="service_provider_name" placeholder="your name" defaultValue={user.displayName} className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="service_provider_email" placeholder="email" defaultValue={user.email} className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Profile Image</span>
                                </label>
                                <input type="text" name="service_provider_image" placeholder="profile image" defaultValue={user.photoURL} className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="service_price" placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Area</span>
                                </label>
                                <input type="text" name="service_area" placeholder="service area" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="service_description" placeholder="service description" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-success normal-case">Add</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/d4s8dTC/local-tours-add-services.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServices;