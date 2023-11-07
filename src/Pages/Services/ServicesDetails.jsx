import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ServicesDetails = () => {
    const { id } = useParams();
    const { isPending, error, data } = useQuery( {
        queryKey: [ 'repoData' ],
        queryFn: () =>
            fetch( `http://localhost:5000/services/details/${id}` ).then(
                ( res ) => res.json(),
            ),
    } )

    if ( isPending ) return 'Loading...'

    if ( error ) return 'An error has occurred: ' + error.message

    const { _id, ServiceName, ServiceDescription, ServiceProvider, ServicePrice, ServiceLocation, ServiceStatus, ServiceImage, ServiceProviderImage } = data;

    return (
        <div>
            Service name {ServiceName}
        </div>
    );
};

export default ServicesDetails;