import { useQuery } from "@tanstack/react-query";
import ServicePageBaner from "../../Components/commonBanner/ServicePageBaner";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const { isPending, error, data } = useQuery( {
        queryKey: [ 'data' ],
        queryFn: () =>
            fetch( 'http://localhost:5000/services' ).then(
                ( res ) => res.json(),
            ),
    } )

    if ( isPending ) return 'Loading...'

    if ( error ) return 'An error has occurred: ' + error.message

    return (
        <div>
            <ServicePageBaner></ServicePageBaner>

            <div className="my-40">
                <form>
                    <div className="w-full flex justify-center">
                        <input type="text" placeholder="Search By Service Name" className="w-2/3" />
                        <button type="submit" className="bg-blue-600 px-4 py-2 text-white ">Search</button>
                   </div>
                </form>
            </div>
            <div className="my-40">
                {
                    data?.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;