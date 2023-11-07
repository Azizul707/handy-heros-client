/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const ServiceMenu = ( { service } ) => {

    const { _id, ServiceName, ServiceDescription, ServiceProvider, ServicePrice, ServiceLocation, ServiceStatus, ServiceImage, ServiceProviderImage } = service;

    return (
        <div>
            <div className=" rounded-lg shadow-lg overflow-hidden">
                <img src={ ServiceImage } alt='' className="w-96 h-40 object-cover object-center" />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{ ServiceName }</h2>
                    <p className="text-gray-600 text-sm mb-2">Price: ${ ServicePrice }</p>
                    <p className="text-gray-700 text-sm mb-4">{ ServiceDescription }</p><hr /><br />
                    <div className="bg-slate-100 flex justify-between items-center  p-2">
                        <div className="w-20">
                            <img src={ ServiceProviderImage } alt={ ServiceProvider } className="w-full h-auto object-cover rounded-full" />
                        </div>
                        <span className="text-gray-700 ml-2 font-semibold">{ ServiceProvider }</span>
                    </div>
                    <Link to={`/service-details/${_id}`}>
                    <button className="mt-5 flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            VIEW DETAILS
                        </span>
                    </button>
                    </Link>

                </div>
            </div>


        </div>
    );
};

export default ServiceMenu;