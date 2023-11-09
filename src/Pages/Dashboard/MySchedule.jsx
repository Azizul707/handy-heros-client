import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import loading from "../../assets/svg/Loading.json"
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";
import BookingCard from "../../Components/BookingCard";


const MySchedule = () => {
    const { user } = useContext( AuthContext );
    console.log(user.email);

    const { isPending, error, data } = useQuery({
        queryKey: ['data'],
        queryFn: () =>
          fetch(`http://localhost:5000/bookings?email=${user?.email}`,{credentials:"include"}).then(
            (res) => res.json(),
          ),
      })
    
      if (isPending) return <Lottie animationData={loading} loop={true}></Lottie>
    
    if ( error ) return 'An error has occurred: ' + error.message
       

    return (
        <div>
            <div className="mt-10">
                <nav>
                    <NavLink className="bg-blue-600 text-white px-4 py-2 rounded-lg" to='/dashboard/pending-work'>My Pending Works</NavLink>
            </nav>

            </div>
            <div className="mb-40 mt-16">

              <h1 className="text-3xl font-bold border-b">Booking List</h1>  
            
            {
                data.length > 0 ? data.map((booking,idx)=><BookingCard key={idx} booking={booking}></BookingCard>) : <p>You have no bookings</p>
            }
            </div>            
        </div>
    );
};

export default MySchedule;