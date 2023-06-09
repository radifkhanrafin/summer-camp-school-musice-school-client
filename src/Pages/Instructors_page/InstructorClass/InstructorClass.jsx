import React from 'react';
import { useLoaderData } from 'react-router-dom';

const InstructorClass = () => {
    const InstructorClass = useLoaderData()
    const { classes } = InstructorClass
    console.log(InstructorClass)
    console.log(classes)
    return (
        <div className='my-5'>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className=' border-4 '>
                        <tr className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-16 font-bold bg-opacity-30'>
                            <th>SN</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Available Seats</th>
                            <th>Course Price</th>
                            <th>Course Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((AllClass, index) =>
                                <tr className=" font-bold">
                                    <th># {index + 1}</th>
                                    <td>
                                        <img className='w-16 rounded-lg' src={AllClass.image} alt="" />
                                    </td>
                                    <td>{AllClass.name}</td>
                                    <td>{AllClass.instructors_Name}</td>
                                    <td>{AllClass.seats}</td>
                                    <td>$ {AllClass.price}</td>
                                    <td>
                                        <button
                                            className='btn btn-success'
                                        //  onClick={}
                                        >Select</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstructorClass;