import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import UserLayout from '../Layout/UserLayout';
import SignUp from '../Pages/SignUp/SignUp';
import Instructors from '../Pages/Instructors/Instructors';
import DashBord from '../Layout/DashBord';
import SelectedClasss from '../Dashbord/StudentDashbord/SelectedClasss/SelectedClasss';
import EnrolledCourse from '../Dashbord/StudentDashbord/EnrolledCourse/EnrolledCourse';
import Add_Course from '../Dashbord/InstuctorDashbord/Add_Course/Add_Course';
import My_Class from '../Dashbord/InstuctorDashbord/My_Class/My_Class';
import UserLogin from '../Pages/Login/UserLogin';
import AdminHome from '../Dashbord/AdminDashbord/AdminHome/AdminHome';
import ManageUsers from '../Dashbord/AdminDashbord/manageUsers/ManageUsers';
import ManageClass from '../Dashbord/AdminDashbord/ManageClass/ManageClass';
import Web_Analysis from '../Dashbord/AdminDashbord/Web_Analysis/Web_Analysis';
import Class from '../Pages/Class/Class';
import StudentDashbord from '../Dashbord/StudentDashbord/StudentDashbord';
// import CheckOutForm from '../Dashbord/StudentDashbord/CheckOutForm/CheckOutForm';
import Payment_Checkout from '../Dashbord/StudentDashbord/Payment_Checkout.jsx/Payment_Checkout';
import Payment from '../Dashbord/StudentDashbord/Payment/Payment';
import PrivateRoutes from './PrivateRoutes';
import Payment_History from '../Dashbord/StudentDashbord/Payment_History/Payment_History';


const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout></UserLayout>,
        children: [
            {
                path: '/login',
                element: <UserLogin></UserLogin>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/Instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/Class',
                element: <Class></Class>
            },
        ]
    },
    {
        path: '/dashbord',
        element: <PrivateRoutes><DashBord></DashBord></PrivateRoutes>,
        children: [
            {
                path: 'userHome',
                element: <StudentDashbord></StudentDashbord>
            },
            {
                path: 'selectedcourse',
                element: <SelectedClasss></SelectedClasss>
            },
            {
                path: 'enrolledcourse',
                element: <EnrolledCourse></EnrolledCourse>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymenthistory',
                element: <Payment_History></Payment_History>
            },
            {
                path: 'addcourse',
                element: <Add_Course></Add_Course>
            },
            {
                path: 'myclass',
                element: <My_Class></My_Class>
            },
            {
                path: 'adminhome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'manageuser',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manageclass',
                element: <ManageClass></ManageClass>
            },
            {
                path: 'webanalysis',
                element: <Web_Analysis></Web_Analysis>
            },
        ]
    }
]);

export default router;