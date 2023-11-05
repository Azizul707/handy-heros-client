import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Components/Layouts/MainLayouts';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';

const MainRoutes = createBrowserRouter( [
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            {
            path: '/',
            element:<Home></Home>
            },
            {
                path: 'services',
                element:<Services/>
            },
            {
                path: 'dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'register',
                element:<Register/>
            }
        ]






    }
] )

export default MainRoutes;