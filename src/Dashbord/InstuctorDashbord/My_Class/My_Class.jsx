import React from 'react';
import useAxiosSecure from '../../../UseHooks/useAxiosSecure/useAxiosSecure';
import useAuth from '../../../UseHooks/useAuth/useAuth';
import { useQuery } from 'react-query';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const My_Class = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()
    const { data: classes = [], refetch, isLoading } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get(`/myClass/${user?.email}`)
        console.log(res.data)
        return res.data;
    })

    const removeMyClass = (id) => {
        console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/class/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch()
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })


    }

    return (
        <div>
            my class {classes.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Banner</th>
                            <th>Tutorial</th>
                            <th>Total Enrolled</th>
                            <th>Remove</th>
                            <th>Update</th>
                            <th>Admin Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((AllClass, index) => <tr>
                                <td>{index + 1}</td>
                                <td><img className='w-24 h-16 rounded' src={AllClass.image} alt="" /></td>
                                <td>{AllClass.name}</td>
                                <td>{index + 12}</td>
                                <td><button onClick={() => removeMyClass(AllClass._id)}><FaTrashAlt className='text-2xl text-error hover:text-blue-700' /></button></td>
                                <td></td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }
                       



                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default My_Class;