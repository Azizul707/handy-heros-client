/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import CarouselFeature from "../../Components/CarouselFeature";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";




const ServicesDetails = () => {

    const impressiveServiceFeatures = [
        "Professional Service Providers: Connect users with experienced and certified professionals in their respective service categories.",
        "Transparent Pricing: Offer clear and upfront pricing, enabling users to make informed decisions and find services that match their budget.",
        "Ratings and Reviews: Display user reviews and ratings for service providers to build trust and help customers choose the best service.",
        "Booking and Scheduling: Provide easy online booking and appointment scheduling, giving users the flexibility to choose convenient time slots.",
        "Location-Based Services: Enable users to find service providers in their local area or city for quick and convenient access.",
        "Certified and Background Checked: Assure users that service providers are certified and have undergone background checks for safety and quality.",
        "Custom Packages: Offer a variety of service packages tailored to specific needs, allowing users to choose what suits them best.",
        "Flexible Availability: Provide services at flexible times, including weekends and evenings, to accommodate busy schedules.",
        "Secure Payments: Implement secure online payment options, ensuring user data and transactions are protected.",
        "Service Guarantee: Give users peace of mind with a satisfaction guarantee and the option to request a redo or resolution if they're not satisfied with the service."
    ];



    const {user} = useContext(AuthContext)
    const [ isModalOpen, setIsModalOpen ] = useState( false );

    const { id } = useParams();
    const { isPending, error, data } = useQuery( {
        queryKey: [ 'repoData' ],
        queryFn: () =>
            fetch( `http://localhost:5000/services/details/${ id }` ).then(
                ( res ) => res.json(),
            ),
    } )

    if ( isPending ) return 'Loading...'

    if ( error ) return 'An error has occurred: ' + error.message


    const { _id, ServiceName, ServiceDescription, ServiceProvider, ServicePrice, ServiceLocation, ServiceStatus, ServiceImage, ServiceProviderImage } = data;

    //

    const modalControl = () => {

        setIsModalOpen( !isModalOpen );
    }

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
        const date = e.target.date.value;

        const bookingService = { name, email, ServiceImage, ServiceName, ServiceLocation, ServicePrice, ServiceDescription, ServiceProvider,date };

      
        axios.post( 'http://localhost:5000/bookings', {bookingService } )
            .then( res => {
                console.log( res );
                toast.success("Purchase Success!")
            } )
            .catch( err => {
                console.log( err );
                toast.error("Something Went Wrong")
            } )
        
        setIsModalOpen( false );
    }

    return (
        <div className="">
            <h1 className="text-4xl font-bold my-5 border-b">{ ServiceName }</h1>
            <div className="grid md: grid-cols-12 gap-5 rounded">
                <div className="col-span-8 ">
                    <img className="" src={ ServiceImage } alt="" />
                </div>
                <div className="col-span-4 bg-slate-100 text-slate-700 rounded text-xl p-3 space-y-4">
                    <h1 className="">{ ServiceDescription }</h1>
                    <h1 className="text-2xl font-bold text-blue-600">Price: ${ ServicePrice }</h1>
                    <img className="" src={ ServiceProviderImage } alt="" />
                    <span className="flex gap-5">
                        <h1 className="">{ ServiceProvider }</h1>
                        <span className="text-blue-600 text-3xl"><FaMapMarkerAlt></FaMapMarkerAlt></span>
                        <span>{ ServiceLocation }</span>
                    </span>
                    <button onClick={ modalControl }
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 w-full flex justify-center"
                    >
                        <svg
                            className="w-3.5 h-3.5 mr-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 21"
                        >
                            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                        </svg>
                        Book now
                    </button>

                </div>
            </div>
            <div className="">
                <h1 className="my-10 text-4xl font-bold">Your { ServiceName } Solution – Professional, Reliable, and Convenient</h1>
                <p>
                    Discover our top-notch { ServiceName } service, where we bring expertise, professionalism, and convenience right to your doorstep. Our dedicated { ServiceProvider } is here to make your experience seamless and enjoyable. With a stellar rating of 5 and 1.1M satisfied customers, you are in capable hands. { ServiceProvider } is certified and qualified, ensuring the highest standards of quality. Pricing is transparent, starting at { ServicePrice }, and availability is [Availability Schedule]. Whether you are in { ServiceLocation } or nearby, we are here to assist you. Explore our gallery of  to get a glimpse of our work. Feel free to contact us for more details, and let us provide the { ServiceName } solution that suits your needs.
                </p>
            </div>
            <div className="w-2/3">
                <CarouselFeature></CarouselFeature>
            </div>
            <h1 className="mt-20 mb-5 text-3xl font-bold">Key Features of Our Services</h1>
            <div className="mb-40">
                {
                    impressiveServiceFeatures.map( ( point, idx ) => <li className="leading-loose" key={ idx }>{ point }</li> )
                }
            </div>
            {
                isModalOpen && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70">
                        <div className="mt-10">
                            <div className=" max-w-screen-md mx-auto flex justify-center items-center bg-gray-200 p-5">
                                <form onSubmit={handleAddService} className="border px-4 py-10 rounded-lg max-w-5xl mx-auto bg-[#f1f1f1]">
                                    <div className="md:flex gap-5">
                                        <div className="mb-4 md:w-1/2">
                                            <label htmlFor="name" className="block pb-2 pl-1">Name:</label>
                                            <input type="text" id="name" name="ServiceProvider" className="border rounded px-3 py-2 w-full" readOnly defaultValue={user?.displayName} />
                                        </div>

                                        <div className="mb-4 md:w-1/2">
                                            <label htmlFor="email" className="block pb-2 pl-1">Email:</label>
                                            <input type="email" id="email" name="email" className="border rounded px-3 py-2 w-full" required defaultValue={user?.email} readOnly />
                                        </div>
                                    </div>

                                    <div className="md:flex gap-5">
                                        <div className="mb-4 md:w-1/2">
                                            <label htmlFor="password" className="block pb-2 pl-1">Service Name:</label>
                                            <input type="text" placeholder="" className="w-full px-3 py-2 border rounded" readOnly defaultValue={ServiceName} name="ServiceName" />
                                        </div>
                                        <div className="mb-4 md:w-1/2">
                                            <label htmlFor="password" className="block pb-2 pl-1">Picture URL:</label>
                                            <input type="text" name="ServiceImage" className="border rounded px-3 py-2 w-full" required readOnly defaultValue={ServiceImage} />
                                        </div>

                                    </div>
                                    <div className="md:flex gap-5">
                                    <div className="mb-4 md:w-1/2">
                                        <label htmlFor="password" className="block pb-2 pl-1">Service Location:</label>
                                        <input type="text" id="password" name="ServiceLocation" className="border rounded px-3 py-2 w-full" required defaultValue={ ServiceLocation } />
                                    </div>
                                        <div className="mb-4 md:w-1/2">
                                            <label htmlFor="password" className="block pb-2 pl-1">Instruction:</label>
                                            <input type="date" id="" name="date" className="border rounded px-3 py-2 w-full" required />
                                        </div>

                                    </div>
                                    <div className="md:flex gap-5">
                                        <div className="mb-4 md:w-1/2">
                                            <label htmlFor="password" className="block pb-2 pl-1">Price: </label>
                                            <input type="text" name="ServicePrice" className="border rounded px-3 py-2 w-full" required readOnly defaultValue={ServicePrice} />
                                        </div>
                                        <div className="mb-4 md:w-1/2">
                                            <label htmlFor="password" className="block pb-2 pl-1">Instruction:</label>
                                            <input type="text" id="" name="ServiceDescription" className="border rounded px-3 py-2 w-full" required />
                                        </div>

                                    </div>
                                    
                                    <div className="">
                                        <div className="py-5 md:ml-[28rem]"> <input type="submit" value="Purchase Now" className="bg-blue-500 cursor-pointer text-white rounded px-4 py-2" /></div>
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

export default ServicesDetails;