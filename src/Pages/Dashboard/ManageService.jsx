import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import ManageServiceCard from '../../Components/ManageServiceCard';

const ManageService = () => {
    const { user } = useContext( AuthContext );
    const { isPending, error, data } = useQuery( {
        queryKey: [ 'data' ],
        queryFn: () =>
            fetch( `http://localhost:5000/services?email=${user.email}` ).then(
                ( res ) => res.json(),
            ),
    } )

    if ( isPending ) return 'Loading...'

    if ( error ) return 'An error has occurred: ' + error.message


    

    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-3'>Manage My Service</h1>
            <div className="">
                {
                    data?.map((service,idx)=><ManageServiceCard key={idx} service={service}></ManageServiceCard>)
                }
            </div>
        </div>
    );
};

export default ManageService;