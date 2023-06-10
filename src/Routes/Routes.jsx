import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import UserLayout from '../Layout/UserLayout';
import SignUp from '../Pages/SignUp/SignUp';
import Instructors from '../Pages/Instructors/Instructors';
import InstructorClass from '../Pages/Instructors_page/InstructorClass/InstructorClass';
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
// import CheckOutForm from '../Dashbord/StudentDashbord/CheckOutForm/CheckOutForm';


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
                path: '/:id',
                element: <InstructorClass></InstructorClass>,
                loader: ({ params }) => fetch(`http://localhost:5000/instructors/${params.id}`)
            },
        ]
    },
    {
        path: '/dashbord',
        element: <DashBord></DashBord>,
        children: [
            {
                path: 'selectedCourse',
                element: <SelectedClasss></SelectedClasss>
            },
            {
                path: 'enrolledCourse',
                element: <EnrolledCourse></EnrolledCourse>
            },
            // {
            //     path: 'payment/:id',
            //     element: <CheckOutForm></CheckOutForm>,
            //     // loader:{params}=>fetch()
            // },
            {
                path: 'addCourse',
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
                path: 'manageUser',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manageClass',
                element: <ManageClass></ManageClass>
            },
            {
                path: 'webAnalysis',
                element: <Web_Analysis></Web_Analysis>
            },
        ]
    }
]);

export default router;