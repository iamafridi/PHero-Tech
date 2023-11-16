import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id =>{
fetch(`http://localhost:5000/user/${id}`,{
    method: 'DELETE'
})
.then(res=>res.json())
.then(data =>{
    if(data.deletedCount >0){
        console.log("deleted");
        // removing user from UI
        const reamining = users.filter(user => user._id !== id);
        setUsers(reamining);
    }
})
    }
    return (
        <div className="p-24 font-poppins">
            <h2 className="text-3xl text-center font-semibold mb-4">Users :{loadedUsers.length}</h2>

            <div className='overflow-scroll bg-teal-200 border border-red-400'>
                <table className='table zebra warn'>
                    <thead>
                        <tr>
                            <th>
                                Email
                            </th>
                            <th>
                                Created Time
                            </th>

                            <th>
                                Last Logged In
                            </th>
                            <th>
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody className="outline ">
                        {
                            users.map(user => <tr className="outline outline-1 outline-red-600" key={user._id}>
                                {/* <th>
                                    {user._id}
                                </th> */}
                                <td className="font-semibold">
                                    {user.email}
                                </td>
                                <td>
                                    {user.createAt}
                                </td>
                                <td>
                                    {user.lastLoggedAt}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="btn bg-red-500 text-white">X</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;