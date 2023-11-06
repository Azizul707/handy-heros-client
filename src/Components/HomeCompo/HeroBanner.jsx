
const HeroBanner = () => {
    return (
        <div className='bg-slate-100 my-20 p-4 md:flex gap-10'>
            <div className="flex-1 flex items-center ">
                <div className="space-y-5 font-bold">
                <h1 className='text-3xl font-bold'>Simplify Your Daily Routine</h1>
                    <p>When life becomes hectic, you do not have to face it solo. Reclaim your time for the things you enjoy without emptying your wallet.</p>
                    
                <li> Select your Helper based on feedback, expertise, and cost</li>
                <li>Book at a time that suits your schedule — even for today
                </li>
                <li>Communicate, pay, show appreciation, and provide feedback all within a single platform

                </li>
                </div>

            </div>
            <div className="flex-1">
                <img src="https://www.pngmart.com/files/23/Moving-PNG.png" alt="" />
            </div>
        </div>
    );
};

export default HeroBanner;