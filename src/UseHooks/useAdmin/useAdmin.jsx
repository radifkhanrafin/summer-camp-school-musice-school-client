import React from 'react';
import useAxiosSecure from '../useAuth/useAxiosSecure/useAxiosSecure';

const useAdmin = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    // console.log('axiosSecure' , axiosSecure);

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log('is admin response', res)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;