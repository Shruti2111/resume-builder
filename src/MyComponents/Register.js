import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import logo from "../asset/logo.png";
import InputControl from './InputControl';

/*
function password_validate(p) {
    return (/[A-Z]/.test(p) && /[0-9]/.test(p) && !/[aeiou]/.test(p) && /^[@#][A-Za-z0-9]{7,13}$/.test(p));
}
*/
const Register = () => {

    const navigate = useNavigate();

    const [user,setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {        
        const {name , value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = () =>{
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword )){
                axios.post("http://localhost:9002/register", user)
                .then( res => {
                 alert(res.data.message)
                navigate.push("/login")
                })  
        } else {
            alert("Fill all the fields to register.")
        }
    }

    return (
        <div className="register">
            <img className="logo1" src={logo} alt="logo"/>
        {console.log("User", user)}
            <h1>Register</h1>
            <InputControl
                type ="text" 
                name="name" 
                label="Username"
                errorMessage="*Username should be 3-16 characters!"
                value={user.name} 
                placeholder="Enter your Name" 
                onChange={ handleChange }>
            </InputControl>
            <InputControl
                type ="text" 
                name="email" 
                label="Email"
                errorMessage="*Invalid Email!"
                value={user.email}  
                placeholder="Enter your Email" 
                onChange={ handleChange }>
           </InputControl>
            <InputControl
                type ="password" 
                name="password" 
                label="Password"
                value={user.password} 
                placeholder="Enter your Password" 
                onChange={ handleChange }>
        </InputControl>
            <InputControl
                type ="password" 
                label="Confirm Password"
                name="reEnterPassword"
                errorMessage="*Password doesn't match!" 
                value={user.reEnterPassword}  
                placeholder="Re-enter Password" 
                onChange={ handleChange }>
         </InputControl>

            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={ () => navigate("/login")}>Login</div>
        </div>
    )
}

export default Register
