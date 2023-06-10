import React from 'react';
import { FaHome, FaMailBulk, FaShoppingBag, FaUtensils } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const InstuctorDashbord = () => {
    return (
        <>
            <li><NavLink to='/dashbord/usershome'><FaHome /> Instuctor home </NavLink></li>
            <li><NavLink to='/dashbord/addCourse'> <FaUtensils /> Add Course </NavLink></li>
            <li><NavLink to='/dashbord/enrolledCourse'> My Classes</NavLink></li>
        </>
    );
};

export default InstuctorDashbord;