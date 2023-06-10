import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import UserLayout from '../Layout/UserLayout';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Instructors from '../Pages/Instructors/Instructors';
import InstructorClass from '../Pages/Instructors_page/InstructorClass/InstructorClass';
import DashBord from '../Layout/DashBord';
import SelectedClasss from '../Dashbord/StudentDashbord/SelectedClasss/SelectedClasss';
import EnrolledCourse from '../Dashbord/StudentDashbord/EnrolledCourse/EnrolledCourse';
import Add_Course from '../Dashbord/InstuctorDashbord/Add_Course/Add_Course';


const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout></UserLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
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
            {
                path: 'addCourse',
                element: <Add_Course></Add_Course>
            },
        ]
    }
]);

export default router;