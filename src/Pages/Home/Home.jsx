import FeaturesTasker from "../../Components/HomeCompo/FeaturesTasker";
import HeroBanner from "../../Components/HomeCompo/HeroBanner";
import Inspired from "../../Components/HomeCompo/Inspired";


const Home = () => {
    return (
        <div className="">
            <div className="relative w-full">
                <img src="https://www.mentorcliq.com/wp-content/uploads/2022/02/Onboarding_Mentoring-2-scaled.webp" alt="" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-cyan-800 ">
                    <div className="absolute top-2 right-5 md:right-10 md:top-20 space-y-14">
                    <h1 className="md:text-6xl font-bold text-blue-500">Seek Assistance <br /> <span className="text-gray-500">Find Joy</span> </h1>
                    <p className="text-xs space-y-0 md:text-xl text-gray-600">Discover the path to happiness <br /> through our supportive community. Join us today and <br /> seek assistance to find joy.</p>
                    <button className="md:border border-gray-600 py-2 px-4 font-bold rounded shadow-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-gray-700">Explore Now</button>
                    </div>
                </div>
            </div>
            <HeroBanner />
            <FeaturesTasker />
            <Inspired/>
        </div>
    );
};

export default Home;