/* eslint-disable react/prop-types */
import { FaMapMarkerAlt } from 'react-icons/fa';

const BookingCard = ( { booking } ) => {

    const { _id, ServiceName, ServiceDescription, ServiceProvider, ServicePrice, ServiceLocation, ServiceImage, ServiceProviderImage,date } = booking;

    return (
        <div className="">
            <div className="my-10 grid md:grid-cols-2 items-center">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={ ServiceImage }
                    alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        { ServiceName }
                    </h5>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-600">
                        Price:  ${ ServicePrice }
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        { ServiceDescription }
                    </p>
                </div>

            </div>
            <div className="rounded-lg -mt-2 bg-slate-100 flex items-center justify-around  px-2 max-w-[579px] h-36 ">
                <div className="flex items-center gap-10">
                    <div className="w-20">
                        <img src={ ServiceProviderImage } alt={ ServiceProvider } className="w-full h-auto object-cover rounded-full" />
                    </div>
                    <span className="text-gray-700 ml-2 font-semibold">Booking Date: { date }</span>
                <div className="flex items-center gap-5">
                    <span className="text-blue-600 text-3xl"><FaMapMarkerAlt></FaMapMarkerAlt></span>
                    <span>{ServiceLocation}</span>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BookingCard;


