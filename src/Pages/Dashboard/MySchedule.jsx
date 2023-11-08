import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const MySchedule = () => {
    const { user } = useContext( AuthContext );

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch(`http://localhost:5000/bookings?email=${user?.email}`).then(
            (res) => res.json(),
          ),
      })
    
      if (isPending) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
                this my my schudule             
        </div>
    );
};

export default MySchedule;