/* eslint-disable no-unused-vars */

import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Auth/AuthProvider";

const AddService = () => {

    const { user } = useContext( AuthContext );

    const handleAddService = ( e ) => {
        e.preventDefault();

        const form = e.target;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const ServiceImage = e.target.ServiceImage.value;
        const ServiceName = e.target.ServiceName.value;
        const ServiceLocation = e.target.ServiceLocation.value;
        const ServicePrice = e.target.ServicePrice.value;
        const ServiceDescription = e.target.ServiceDescription.value;
        const ServiceProvider = e.target.ServiceProvider.value;

        const addService = {
            ServiceName,
            ServiceDescription,
            ServiceProvider,
            ServicePrice,
            ServiceLocation,
            ServiceImage,
            name,
            email
        }
        
        axios.post( 'https://my-handy-heroes-server.vercel.app/services', { ServiceName,
        ServiceDescription,
        ServiceProvider,
        ServicePrice,
        ServiceLocation,
        ServiceImage,
        name,
        email } )
            .then( res => res.json() )
            .then( data => { console.log( data ) } )
        toast.success( 'Product Added Successfully' )
        form.reset();
    }

    return (
        <div className="max-w-screen-xl mx-auto mb-40 mt-10 ">
            <div className=""><p className="text-5xl py-10 font-bold text-center">Add Your Service</p></div>
            <form onSubmit={ handleAddService } className="border px-4 py-10 rounded-lg max-w-5xl mx-auto bg-[#f1f1f1]">
                <div className="md:flex gap-5">
                    <div className="mb-4 md:w-1/2">
                        <label htmlFor="name" className="block pb-2 pl-1">Name:</label>
                        <input type="text" id="name" name="ServiceProvider" className="border rounded px-3 py-2 w-full" required defaultValue={user?.displayName} />
                    </div>

                    <div className="mb-4 md:w-1/2">
                        <label htmlFor="email" className="block pb-2 pl-1">Email:</label>
                        <input type="email" id="email" name="email" className="border rounded px-3 py-2 w-full" required defaultValue={user?.email} />
                    </div>
                </div>

                <div className="md:flex gap-5">
                    <div className="mb-4 md:w-1/2">
                        <label htmlFor="password" className="block pb-2 pl-1">Service Name:</label>
                        <input type="text" placeholder="" className="w-full border px-3 py-2 rounded" name="ServiceName" />
                    </div>
                    <div className="mb-4 md:w-1/2">
                        <label htmlFor="password" className="block pb-2 pl-1">Picture URL:</label>
                        <input type="text" name="ServiceImage" className="border rounded px-3 py-2 w-full" required defaultValue={user?.photoURL} />
                    </div>

                </div>
                <div className="md:flex gap-5">
                    <div className="mb-4 md:w-1/2">
                        <label htmlFor="password" className="block pb-2 pl-1">Price: </label>
                        <input type="text" name="ServicePrice" className="border rounded px-3 py-2 w-full" required />
                    </div>
                    <div className="mb-4 md:w-1/2">
                        <label htmlFor="password" className="block pb-2 pl-1">Description:</label>
                        <input type="text" id="" name="ServiceDescription" className="border rounded px-3 py-2 w-full" required />
                    </div>

                </div>
                <div className="mb-4 md:w-1/2">
                    <label htmlFor="password" className="block pb-2 pl-1">Service Location:</label>
                    <input type="text" id="password" name="ServiceLocation" className="border rounded px-3 py-2 w-full" required />
                </div>
                <div className="">
                    <div className="py-5 md:ml-[28rem]"> <input type="submit" value="Add Service" className="bg-blue-500 cursor-pointer text-white rounded px-4 py-2" /></div>
                </div>


            </form>
        </div>
    );
};

export default AddService;