import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import { Toaster } from 'react-hot-toast';

const MainLayouts = () => {
    return (
        <div>
           <NavBar></NavBar>
            <div className="max-w-screen-xl mx-auto px-2">
            <Outlet></Outlet>
            </div>
            <div><Toaster/></div>
        </div>
    );
};

export default MainLayouts;