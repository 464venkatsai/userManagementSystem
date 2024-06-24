import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import "./Home.css"

export default function Home () {
    const [users,setUsers] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        loadUsers()
    },[])

    const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }
    const deleteUser = async (id)=>{
        await axios.delete(`http://localhost:8080/deleteuser/${id}`);
        loadUsers();
    }
  return (
    <div className='container'>
        <section>
            <table className='table'>
                <thead>
                    <tr className='tr'>
                        <th scope='col'>ID</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Username</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>{
                            return  <tr key={index} className='tr'>
                                <th scope='row'>{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td className='action'>
                                    <Link to={`updateuser/${user.id}`}><button className='btn'>Edit</button></Link>
                                    <button className='btn' onClick={()=>deleteUser(user.id)}>Delete</button>
                                    <Link to={`viewdetails/${user.id}`}><button className='btn'>View Details</button></Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>
    </div>
  )
}
