import React from 'react';
import UserLayout from '../Layout/UserLayout';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Instructors from '../Pages/Instructors/Instructors';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import InstructorClass from '../Pages/Instructors_page/InstructorClass/InstructorClass';


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
    ]);

export default router;