import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { getUsers } from "../lib/helper";
import { useQuery } from 'react-query';
import { useSelector} from 'react-redux'


export default function TableList(){
    
    const visible = useSelector((state) => state)
    console.log(visible)
    const { isLoading, isError, data, error } = useQuery('users', getUsers)

    if(isLoading) return <div>Employee is Loading...</div>;
    if(isError) return <div>Got Error {error}</div>

    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Name</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Email Address</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Mobile Number</span>
                    </th>
                   

                    
                  
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                    {
                        [data].map((obj, i) => <Tr {...obj} key={i} />)
                    }
            </tbody>
        </table>
    )
}

function Tr({id, name, email, mobilenumber }){

    return (
        <tr className="bg-gray-50 text-center">
        <td className="px-16 py-2 flex flex-row items-center">

            <span className="text-center ml-2 font-semibold">{name || "Unknown"}</span>
        </td>
        <td className="px-16 py-2">
            <span>{email || "Unknown"}</span>
        </td>
        <td className="px-16 py-2">
            <span>{mobilenumber|| "Unknown"}</span>
        </td>
        
        
    </tr>
    )
}