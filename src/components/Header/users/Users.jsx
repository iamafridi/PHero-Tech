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
        <div className="p-24">
            <h2>Users :{loadedUsers.length}</h2>

            <div className='overflow-scroll'>
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
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id}>
                                <th>
                                    {user._id}
                                </th>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.createAt}
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