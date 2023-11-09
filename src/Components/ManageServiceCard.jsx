/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";

const ManageServiceCard = ( { service } ) => {
    const { user } = useContext( AuthContext );

    const [ openModal, setOpenModal ] = useState( false );


    const { _id, ServiceName, ServiceDescription, ServiceProvider, ServicePrice, ServiceLocation, ServiceStatus, ServiceImage, ServiceProviderImage } = service;
    


    const handleUpdate = () => {

        setOpenModal(true)
        
    }

    const handleUpdateService = ( e,id ) => {
        e.preventDefault();

        const form = e.target;
        const email = e.target.email.value;
        const ServiceImage = e.target.ServiceImage.value;
        const ServiceName = e.target.ServiceName.value;
        const ServiceLocation = e.target.ServiceLocation.value;
        const ServicePrice = e.target.ServicePrice.value;
        const ServiceDescription = e.target.ServiceDescription.value;
        const ServiceProvider = e.target.ServiceProvider.value;
        const ServiceProviderImage = e.target.ServiceProviderImage.value;
        

        const updateService = { email, ServiceImage, ServiceName, ServiceLocation, ServicePrice, ServiceDescription, ServiceProvider,ServiceProviderImage };
        console.log(updateService,id);
      
        fetch( `http://localhost:5000/services/${ id }`, { 
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( updateService )
         } )
            
            .then( res => {
                toast.success("Update Success!")
            } )
            .catch( err => {
                console.log( err );
                toast.error("Something Went Wrong")
            } )
        
        setOpenModal( false );
        console.log(id);
    }


    const handleDelete = ( id ) => {
        fetch( `http://localhost:5000/services/${ id }`,{
            
            method: "DELETE"
        } )
            .then( res => res.json() )
            Swal.fire("Do You Want To Delete This Service")
                .then( data => {
                toast.success('Confirm Delete')
        })
        

        
    }

    return (
        <div className="flex justify-center my-20">
            
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
            {
                openModal && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70">
                        <div className="mt-10">
                            <div className=" max-w-screen-md mx-auto flex justify-center items-center bg-gray-200 p-5">
                                <form onSubmit={(e) => handleUpdateService(e, _id)} className="border px-4 py-10 rounded-lg max-w-5xl mx-auto bg-[#f1f1f1]">
                                    <div className="md:flex gap-5">
                                        <div className="mb-4 md:w-1/2">
                                            <label htmlFor="name" className="block pb-2 pl-1">Name:</label>
                                            <input type="text" id="name" name="ServiceProvider" className="border rounded px-3 py-2 w-full" defaultValue={user?.displayName} />
                                        </div>

                                        <div className="mb-4 md:w-1/2">
                                            <label htmlFor="email" className="block pb-2 pl-1">Email:</label>
                                            <input type="email" id="email" name="email" className="border rounded px-3 py-2 w-full" required defaultValue={user?.email}  />
                                        </div>
                                    </div>

                                    <div className="md:flex gap-5">
                                        <div className="mb-4 md:w-1/2">
                                            <label htmlFor="password" className="block pb-2 pl-1">Service Name:</label>
                                            <input type="text" placeholder="" className="w-full px-3 py-2 border rounded"  defaultValue={ServiceName} name="ServiceName" />
                                        </div>
                                        <div className="mb-4 md:w-1/2">
                                            <label htmlFor="password" className="block pb-2 pl-1">Picture URL:</label>
                                            <input type="text" name="ServiceImage" className="border rounded px-3 py-2 w-full" required  defaultValue={ServiceImage} />
                                        </div>

                                    </div>
                                    <div className="md:flex gap-5">
                                    <div className="mb-4 md:w-1/2">
                                        <label htmlFor="password" className="block pb-2 pl-1">Service Location:</label>
                                        <input type="text" id="password" name="ServiceLocation" className="border rounded px-3 py-2 w-full" required defaultValue={ ServiceLocation } />
                                    </div>
                                        <div className="mb-4 md:w-1/2">
                                            <label htmlFor="password" className="block pb-2 pl-1">Provider Image:</label>
                                            <input type="text" id="" name="ServiceProviderImage" className="border rounded px-3 py-2 w-full" required />
                                        </div>

                                    </div>
                                    <div className="md:flex gap-5">
                                        <div className="mb-4 md:w-1/2">
                                            <label htmlFor="password" className="block pb-2 pl-1">Price: </label>
                                            <input type="text" name="ServicePrice" className="border rounded px-3 py-2 w-full" required defaultValue={ServicePrice} />
                                        </div>
                                        <div className="mb-4 md:w-1/2">
                                            <label htmlFor="password" className="block pb-2 pl-1">Instruction:</label>
                                            <input type="text" id="" name="ServiceDescription" className="border rounded px-3 py-2 w-full"  />
                                        </div>

                                    </div>
                                    
                                    <div className="">
                                        <div className="py-5 md:ml-[28rem]"> <input type="submit" value="Update Now" className="bg-blue-500 cursor-pointer text-white rounded px-4 py-2" /></div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default ManageServiceCard;