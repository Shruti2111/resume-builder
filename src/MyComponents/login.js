import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import logo from "../asset/logo.png";

const Login = ( { setLoginUser } ) => {

    let navigate = useNavigate();

    const [user,setUser] = useState({        
        email:"",
        password:""
    })

    const handleChange = e => {
        
        const {name , value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const login = () =>{
        const {email, password} = user
        if(  email && password){
            axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                navigate("/")
            })
        } else {
            alert("Fill all the fields to login.")
        }
        
    }

    return (
        <div className="login">
             <img className="logo1" src={logo} alt="logo"/>
            <h1>Login</h1>
            <label>Email</label>
            <input type ="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <label>Password</label>
            <input type ="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password"></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={ () => navigate("/register")}>Register</div>
        </div>
    )
}

export default Login