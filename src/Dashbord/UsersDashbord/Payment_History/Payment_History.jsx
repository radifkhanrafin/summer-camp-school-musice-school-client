import React from 'react';
import useAuth from '../../../UseHooks/useAuth/useAuth';
import useAxiosSecure from '../../../UseHooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';

const Payment_History = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()

    const { data: paymenthistory = [], refetch, isLoading } = useQuery(['paymenthistory'], async () => {
        const res = await axiosSecure.get(`/paymenthistory`)
        // console.log(res.data)
        return res.data;
    })
    console.log(paymenthistory)
    return (
        <div>
            
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='rounded-full font-bold'>
                        <tr className='h-20 bg-gray-100'>
                            <th>SN</th>
                            <th>Specilest Of</th>
                            <th>Payment Amount</th>
                            <th>Doctor</th>
                            <th>Tran ID</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            paymenthistory.map((payment, index) =>
                                <tr key={payment._id} className="bg-base-50">
                                    <th>{index + 1}</th>
                                    
                                    <td>{payment.specilest}</td>
                                    <td>${payment.payableAmount}</td>
                                    <td>{payment.doctor}</td>
                                    <td>{payment.tran_id}</td>

                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Payment_History;