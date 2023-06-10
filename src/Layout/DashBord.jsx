import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaMailBulk } from 'react-icons/fa';
import StudentDashbord from '../Dashbord/StudentDashbord/StudentDashbord';
import InstuctorDashbord from '../Dashbord/InstuctorDashbord/InstuctorDashbord';

const DashBord = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-12  ml-8">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <ul className="menu p-4 w-80 bg-[#D1A054] uppercase text-base-content space-y-1">
                        {/* <!-- Sidebar content here --> */}
                        {/* <StudentDashbord></StudentDashbord> */}
                        <InstuctorDashbord></InstuctorDashbord>
                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome /> HOME</NavLink></li>
                        <li><NavLink to='/'><FaMailBulk /> CONTECT</NavLink></li>


                    </ul>
                </ul>

            </div>
        </div>
    );
};

export default DashBord;