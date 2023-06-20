import React from 'react';
import useAxiosSecure from '../../../UseHooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import Marquee from "react-fast-marquee";


const PopularDoctorsByServicesprovide = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: popularinstructors = [], refetch } = useQuery(['popularinstructors'], async () => {
        const res = await axiosSecure.get('/popularinstructors')
        console.log(res.data)
        return res.data;
    })

    return (
        <div className='my-8'>
            <Marquee>
                <h2 className='text-center my-5 text-2xl font-semibold'>Popular Doctors By Sort by their Services Provide And Patient Feedback</h2>
            </Marquee>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                {
                    popularinstructors.map(instructors =>
                        <div key={instructors._id} className="card w-72 bg-slate-300 shadow-xl p-6">
                            <div className="card-body">
                                <h2 className="card-title">Doctor  : {instructors.instructors_Name}</h2>
                                <p> Patient : {instructors.enrolled_Student}</p>
                                <div>
                                    Rating :
                                </div>
                            </div>
                            <figure><img className='w-72 h-52 rounded-md ' src={instructors.instructors_image} alt="Shoes" /></figure>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default PopularDoctorsByServicesprovide;