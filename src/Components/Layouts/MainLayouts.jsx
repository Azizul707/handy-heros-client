import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import { Toaster } from 'react-hot-toast';
import Footer from '../Footer/Footer';

const MainLayouts = () => {
    return (
        <div className='font-jost'>
           <NavBar></NavBar>
            <div className="max-w-screen-xl mx-auto px-2 font-jost">
            <Outlet></Outlet>
            </div>
            <Footer/>
            <div><Toaster/></div>
        </div>
    );
};

export default MainLayouts;