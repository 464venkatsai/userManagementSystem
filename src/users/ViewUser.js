import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./ViewUser.css";

export default function ViewUser() {
  const [user,Setuser] = useState({
    name:"",
    username:"",
    email:"",
    age:"",
    gender:"",
    password:"",
})
  const {id} = useParams();
  const displayAllDetails = async ()=>{
    const result = await axios.get(`http://localhost:8080/user/${id}`)
    Setuser(result.data);
  }
  useEffect(()=>{
    displayAllDetails()
  },[])
  return (
   <div className="ViewUser">
      <section className="container-section">
        <h1>Full Details of ID {id}</h1>
        <section>
          <div>
            <b>Name : </b> <span>{user.name}</span>
          </div>
          <div>
            <b>UserName : </b> <span>{user.username}</span>
          </div>
          <div>
            <b>Email : </b> <span>{user.email}</span>
          </div>
          <div>
            <b>Age : </b> <span>{user.age}</span>
          </div>
          <div>
            <b>Gender : </b> <span>{user.gender}</span>
          </div>
          <div>
            <b>Password : </b> <span>{user.password}</span>
          </div>
          <div>
            <Link to="/"><button className='btn'>Back To Home</button></Link>
            <Link to={`/updateuser/${id}`}><button className='btn'>Edit Details</button></Link>
          </div>
        </section>
      </section>
   </div>
  )
}
