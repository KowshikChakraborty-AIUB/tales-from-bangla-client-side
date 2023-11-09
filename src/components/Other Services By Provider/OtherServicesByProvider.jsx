import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const OtherServicesByProvider = ({ otherService }) => {
    return (
            <div className="card card-side bg-base-100 shadow-xl flex-col">
                <figure><img className='h-4/5 w-4/5' src={otherService.service_image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{otherService.service_name}</h2>
                    <p className='font-semibold'>{otherService.service_description}</p>
                    <p className='font-semibold'>Provider: {otherService.service_provider_name}</p>
                    <p className='font-semibold'>Price: {otherService.service_price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/single-service-details/${otherService._id}`}>
                            <button className="btn btn-success normal-case">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
    );
};

OtherServicesByProvider.propTypes = {
    otherService: PropTypes.object.isRequired,
}

export default OtherServicesByProvider;