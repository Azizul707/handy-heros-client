/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {FaMapMarkerAlt} from "react-icons/fa"


const ServiceCard = ( { service } ) => {
    const { _id, ServiceName, ServiceDescription, ServiceProvider, ServicePrice, ServiceLocation, ServiceImage, ServiceProviderImage } = service;
    return (
        <div className="">
            <Link to='/'

                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
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
                    <Link to={ `/service-details/${ _id }` }>
                        <button className="mt-5 flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                VIEW DETAILS
                            </span>
                        </button>
                    </Link>

                </div>

            </Link>
            <div className="rounded-b-lg -mt-5 bg-slate-100 flex items-center justify-around  p-2 max-w-[579px] ">
                <div className="flex items-center gap-10">
                    <div className="w-20">
                        <img src={ ServiceProviderImage } alt={ ServiceProvider } className="w-full h-auto object-cover rounded-full" />
                    </div>
                    <span className="text-gray-700 ml-2 font-semibold">{ ServiceProvider }</span>
                <div className="flex items-center gap-5">
                    <span className="text-blue-600"><FaMapMarkerAlt></FaMapMarkerAlt></span>
                    <span>{ServiceLocation}</span>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;