import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./AddUser.css"

export default function AddUser() {
    let navigate = useNavigate()
    const [user,Setuser] = useState({
        name:"",
        username:"",
        email:"",
        age:"",
        gender:"",
        password:"",
    })
    
    const {name,username,email,age,gender,password} = user;
    const [confirmPassword,setConfirmPassword] = useState("");

    const handleInputChange = (e)=>{
        Setuser({...user,[e.target.name] : e.target.value})
    }
    const handleConfirmPassword =(e)=>{
        setConfirmPassword(e.target.value);
    }

    const handleFormSubmit = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user);
        navigate("/")
    }
  return (
    <div className='AddUser'>
        <section>
            <h2>Register User</h2>
            <form onSubmit={(e)=>handleFormSubmit(e)} className='form'>
                <section>
                    <label htmlFor="Name">Name : </label>
                    <input type="text" placeholder='Enter your name' onChange={(e)=>handleInputChange(e)} name='name' value={name}/>
                </section>
                <section>
                    <label htmlFor="email">Email : </label>
                    <input type="email" placeholder='Enter your email' onChange={(e)=>handleInputChange(e)} name='email' value={email}/>
                </section>
                <section>
                    <label htmlFor="Age">Age : </label>
                    <input type="number" placeholder='Enter your Age' name='age' onChange={(e)=>handleInputChange(e)} value={age}/>
                </section>
                <section>
                    <label htmlFor="Gender">Gender : </label>
                    <input type="text" placeholder='Enter your Gender' onChange={(e)=>handleInputChange(e)} name='gender' value={gender}/>
                </section>
                <section>
                    <label htmlFor="username">Username : </label>
                    <input type="text" placeholder='Enter your username' onChange={(e)=>handleInputChange(e)} name='username' value={username}/>
                </section>
                <section>
                    <label htmlFor="password">Password : </label>
                    <input type="text" placeholder='Enter a password' onChange={(e)=>handleInputChange(e)} name='password' value={password}/>
                </section>
                <section>
                    <label htmlFor="confirmPassword">Confirm Password : </label>
                    <input type="text" placeholder='Confirm Password' onChange={(e)=>handleConfirmPassword(e)} name='confirmPassword' value={confirmPassword}/>
                </section>
                <section>
                    <button className='btn' type='submit'>Register</button>
                    <Link to="/"> <button className="btn">Back To Home</button></Link>
                </section>

            </form>
        </section>
    </div>
  )
}
