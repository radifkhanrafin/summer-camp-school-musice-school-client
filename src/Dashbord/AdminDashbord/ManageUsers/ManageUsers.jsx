import React, { useState } from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../UseHooks/useAxiosSecure/useAxiosSecure';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        console.log(res.data)
        return res.data;
    })


    const handlemakeAdmin = (user) => {
        console.log(user)
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)

            })
    }
    const handlemakeInstructor = (user) => {
        console.log(user)
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)

            })
    }

    return (
        <div>
            manage users {users.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-center'>
                        <tr>
                            <th>SN</th>
                            <th>User</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Status</th>
                            {/* <th>Remove</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) =>
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td><img className='w-16 h-16 rounded-full' src={user.userProfile} alt="user Image" /></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='gap-3 '>
                                    {
                                        user.role === 'admin' ?
                                            <button onClick={() => handlemakeInstructor(user)} className='btn btn-outline border-pink-600 text-pink-600 w-32'>Instructor </button> : <button onClick={() => handlemakeAdmin(user)} className='btn btn-outline border-blue-700 text-blue-800 w-32'>Admin</button>
                                    }


                                </td>
                                <td>
                                    <button disabled={true} className='btn btn-outline border-pink-600 text-pink-600 w-32'>{user.role}</button>
                                </td>
                                {/* <td>
                                    {user.role === 'admin ' || user.role === 'instructor' ? <button className=' text-pink-600 w-32'><small>Make Student</small></button> : ''}

                                </td> */}
                            </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;