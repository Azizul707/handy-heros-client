/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Inspired = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold">Ignite Your Creativity</h1>
            <p className="font-semibold text-gray-700">Delve into tips, home tours, and Tasker stories.</p>
            <div className="my-5 md:flex gap-5">
                <div className="flex-2">
                    <img src="https://storage.googleapis.com/turbocollage-res/assets/images/home/photo-mosaic.jpg" alt="" />
                </div>
                <div className="bg-slate-100 p-2 flex items-center">
                    <div className="mx-10 text-center">
                        <h1 className="text-xl font-bold">Tasker Chronicles</h1>
                        <p className="text-gray-700 ">Explore the journeys of Taskers who have transformed lives globally.</p>
                        <button className="text-blue-500 mt-5 underline">Read More</button>
                    </div>
                </div>

            </div>
            <div className="my-20 grid md:grid-cols-3 gap-5">
                {/* card one */ }
                <div className="">
                    <div className="max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link href="#">
                            <img className="rounded-t-lg" src="https://flexible.falmouth.ac.uk/hs-fs/hubfs/General%20phone%20call%20500x400.png?width=500&height=400&name=General%20phone%20call%20500x400.png" alt="" />
                        </Link>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Ava Home Renovation
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Revamp your living spaces with our luxurious bathroom remodeling and kitchen upgrade services
                            </p>
                        </div>
                    </div>

                </div>
                {/* card two */ }
                <div className="">
                    <div className="max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link href="#">
                            <img className="rounded-t-lg" src="https://www.thermoline.com.au/hs-fs/hubfs/TL_Contact-Expert.png?width=500&height=400&name=TL_Contact-Expert.png" alt="" />
                        </Link>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Henry's Home Security
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Protect your home with our advanced alarm monitoring and access control security services.Our main
                            </p>
                        </div>
                    </div>

                </div>
                {/* card three */ }
                <div className="">
                    <div className="max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link href="#">
                            <img className="rounded-t-lg" src="https://lifeandcarehome.gr/wp-content/uploads/2023/04/Kein-Titel-400-%C3%97-300-px.png" alt="" />
                        </Link>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Grace's Elderly Care
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Compassionate elderly care services, including companionship and assisted living support.My motto is to serve the people of who are unable to do.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Inspired;