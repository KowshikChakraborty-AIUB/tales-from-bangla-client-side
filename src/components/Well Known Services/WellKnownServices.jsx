import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WellKnownServices = ({ service }) => {
    const { _id, service_image, service_name, service_description, service_provider_name, service_price, service_provider_image } = service;
    return (
        <div className="card card-side bg-base-100 shadow-xl flex-col">
            <figure><img className='h-4/5 w-4/5' src={service_image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p className='font-semibold'>{service_description}</p>
                <div className='flex gap-2'>
                    <img className='h-7 rounded-full' src={service_provider_image} alt="" />
                    <p className='font-bold'>
                        {service_provider_name}
                    </p>
                </div>
                <p className='font-semibold'>Price: {service_price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/single-service-details/${_id}`}>
                        <button className="btn btn-success normal-case">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


WellKnownServices.propTypes = {
    service: PropTypes.object.isRequired
}



export default WellKnownServices;