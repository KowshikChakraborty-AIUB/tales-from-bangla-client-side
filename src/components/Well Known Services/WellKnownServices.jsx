import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WellKnownServices = ({ service }) => {
    const { _id, service_name, service_description, service_provider_name, service_price } = service;
    return (
        <div className="card card-side bg-base-100 shadow-xl flex-col">
            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p className='font-semibold'>{service_description}</p>
                <p className='font-semibold'>Provider: {service_provider_name}</p>
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