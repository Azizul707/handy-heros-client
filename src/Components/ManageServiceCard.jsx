/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";

const ManageServiceCard = ( { service } ) => {
    const { _id, ServiceName, ServiceDescription, ServiceProvider, ServicePrice, ServiceLocation, ServiceStatus, ServiceImage, ServiceProviderImage } = service;

    // const handleUpdate = (id) => {
    //     axios.put(``)
    // }
    const handleDelete = (id) => {
        axios.delete( `http://localhost:5000/services/delete/${ id }` )
        
    }

    return (
        <div className="flex flex-wrap justify-center my-20">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
               
                    <img className="rounded-t-lg" src={ServiceImage} alt="" />
               
                <div className="p-5">
                    
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {ServiceName}
                    </h5>
                    
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {ServiceDescription}
                    </p>
                    <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                       Price:  ${ServicePrice}
                    </p>
                    <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                       Location: {ServiceLocation}
                    </p>
                    <div className="flex justify-around border-t">
                        <button onClick={()=>handleUpdate(_id)} className="bg-blue-600 w-24 mt-2 text-white rounded-md py-1">Update</button>
                        <button onClick={()=>handleDelete(_id)} className="bg-red-600 w-24 mt-2 text-white rounded-md py-1">Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageServiceCard;