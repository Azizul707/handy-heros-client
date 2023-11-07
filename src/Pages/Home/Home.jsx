import { useQuery } from "@tanstack/react-query";
import CarouselFeature from "../../Components/CarouselFeature";
import HeroBanner from "../../Components/HomeCompo/HeroBanner";
import Inspired from "../../Components/HomeCompo/Inspired";
import ServiceMenu from "./ServiceMenu";
import { Link } from "react-router-dom";




const Home = () => {

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
        <div className="">
            <div className="relative w-full">
                <img className="opacity-50" src="https://www.mentorcliq.com/wp-content/uploads/2022/02/Onboarding_Mentoring-2-scaled.webp" alt="" />
                <div className="absolute top-0 left-0 right-0 bottom-0 opacity-24 bg-gradient-to-r from-slate-100  ">
                    <div className="absolute top-2 right-5 md:right-10 md:top-20 space-y-14">
                        <h1 className="md:text-6xl font-bold text-blue-500">Seek Assistance <br /> <span className="text-gray-500">Find Joy</span> </h1>
                        <p className="text-xs space-y-0 md:text-xl text-gray-600">Discover the path to happiness <br /> through our supportive community. Join us today and <br /> seek assistance to find joy.</p>
                        <button className="md:border border-gray-600 py-2 px-4 font-bold rounded shadow-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-gray-700">Explore Now</button>
                    </div>
                </div>
            </div>
            <HeroBanner />

            <h1 className="text-5xl font-bold py-5">Popular Services </h1>
            <div className="border md:py-10 rounded-md mb-40">
                <div className="  grid gap-5 md:grid-cols-2 justify-items-center">
                    {
                        data?.slice( 1, 5 ).map( service => <ServiceMenu key={ service._id } service={ service }></ServiceMenu> )
                    }

                </div>
                <div className=" flex justify-center">
                    <Link to='/services'>
                        <button className="mt-5 flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                ALL SERVICES
                            </span>
                        </button>
                    </Link>
                </div>
            </div>


            <Inspired />
            <div className="my-40">
                <CarouselFeature />
            </div>
        </div>
    );
};

export default Home;