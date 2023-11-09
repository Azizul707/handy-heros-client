import { useQuery } from "@tanstack/react-query";
import ServicePageBaner from "../../Components/commonBanner/ServicePageBaner";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";


const Services = () => {

    const [showMore,setShowMore] = useState(null)
    

    const { isPending, error, data } = useQuery( {
        queryKey: [ 'data' ],
        queryFn: (showMore) =>
            fetch( 'https://my-handy-heroes-server.vercel.app/services' ).then(
                ( res ) => res.json(),
            ),
    } )

    if ( isPending ) return 'Loading...'

    if ( error ) return 'An error has occurred: ' + error.message


    return (
        <div>
            <ServicePageBaner></ServicePageBaner>

            <div className="my-40">
                <h1 className="text-center mb-5 text-4xl fort-bold">Find Your Desire Service By Name </h1>
                <form>
                    <div className="w-full flex justify-center">
                        <input type="text" placeholder="Search By Service Name" className="w-2/3 border px-2" />
                        <button type="submit" className="bg-blue-600 px-4 py-2 text-white ">Search</button>
                   </div>
                </form>
            </div>
            <h1 className="mb-10 text-4xl font-bold underline">Popular Services</h1>
            <div className="mb-10 grid md:grid-cols-2 gap-5">
                {
                    !showMore ? data.slice( 1, 7 ).map( service => <ServiceCard key={ service._id } service={ service }></ServiceCard> )
                        : data.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className="flex justify-center mb-40">
            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={ () => setShowMore( !showMore ) }>
                { !showMore ? "Show More" : "Show Less" }</button>
            </div>
        </div>
    );
};

export default Services;