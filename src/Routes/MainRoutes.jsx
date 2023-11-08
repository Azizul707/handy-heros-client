import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Components/Layouts/MainLayouts';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import AddService from '../Pages/Dashboard/AddService';
import ManageService from '../Pages/Dashboard/ManageService';
import MySchedule from '../Pages/Dashboard/MySchedule';
import ServicesDetails from '../Pages/Services/ServicesDetails';
import PrivateRoute from '../Components/Private/PrivateRoute';

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
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'register',
                element:<Register/>
            },
            {
                path: 'dashboard/add-service',
                element:<PrivateRoute><AddService/></PrivateRoute>
            },
            {
                path: 'dashboard/manage-service',
                element:<PrivateRoute><ManageService/></PrivateRoute>
            },
            {
                path: 'dashboard/my-schedule',
                element:<PrivateRoute><MySchedule/></PrivateRoute>
            },
            {
                path: 'service-details/:id',
                element:<PrivateRoute><ServicesDetails/></PrivateRoute>
            }
           
        ]






    }
] )

export default MainRoutes;