import React from 'react';
import { FaHome, FaUtensils } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const StudentDashbord = () => {
  return (
    <>
      <li><NavLink to='/dashbord/usershome'><FaHome /> Users home </NavLink></li>
      <li><NavLink to='/dashbord/selectedCourse'> <FaUtensils /> Selected Course </NavLink></li>
      <li><NavLink to='/dashbord/enrolledCourse'> My Enrolled Classes</NavLink></li>
    </>
  );
};

export default StudentDashbord;