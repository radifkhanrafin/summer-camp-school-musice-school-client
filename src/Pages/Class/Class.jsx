
import useAxiosSecure from '../../UseHooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import ClassList from '../../Component/InstructorsCard/ClassList/ClassList';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Class = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allClass = [], refetch } = useQuery(['allClass'], async () => {
        const res = await axiosSecure.get('/allClass')
        console.log(res.data)
        return res.data;
    })

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-12'>
                {
                    allClass.map((classes, index) => <ClassList
                        key={classes._id}
                        classes={classes}
                        index={index}
                    ></ClassList>)
                }
            </div>
        </div>
    );
};

export default Class;