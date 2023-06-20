import React from 'react';
import useAxiosSecure from '../../UseHooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import { Dna } from 'react-loader-spinner';
import { Rating } from '@smastrom/react-rating';

const Our_doctor = () => {

    const [axiosSecure] = useAxiosSecure()
    const { data: ourdoctor = [], refetch, isLoading: pageLoading } = useQuery(['ourdoctor'], async () => {
        const res = await axiosSecure.get('/ourdoctors')
        console.log(res.data)
        return res.data;
    })
    if (pageLoading) {
        return <div className='flex justify-center items-center mt-60'>
            <Dna
                visible={true}
                height="200"
                width=""
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 h-[90vh] overflow-y-scroll my-12'>
                {
                    ourdoctor.map(doctor =>
                        <div key={doctor._id} className="card card-side bg-base-200 h-72 p-2 transition-all hover:shadow-2xl hover:scale-105">
                            <figure><img className='w-52 h-full transition hover:scale-125' src={doctor.image} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{doctor.name}</h2>
                                <h5>Doctor Of : <span className='text-success font-bold'>{doctor.specialty}</span></h5>
                                <p>MBBS complete From <span className='font-semibold'>{doctor.medicalCollege}</span></p>
                                <p>Btach : {doctor.batch}</p>
                                <p className='flex gap-2'>Patient Review :
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={doctor.rating}
                                        readOnly
                                    />

                                </p>
                                
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Our_doctor;