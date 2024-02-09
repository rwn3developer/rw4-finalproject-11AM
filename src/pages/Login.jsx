import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // let URL = `http://localhost:8000/users`;
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            console.log(email,password);
            let {data} = await axios.get(`http://localhost:8000/users/?email=${email}&password=${password}`);
            if(data.length > 0){
                toast.success("User successfully Login")
            }else{
                toast.error("User not Login plese check valid email and password")
            }


        }catch(err){
            console.log(err);
            return false;
        }
    }

  return (
    <center>
        <h1>Login Admin</h1>
        <form onSubmit={handleSubmit}>
            <table border={1}>
                <tr>
                    <td>Email :- </td>
                    <td><input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/></td>
                </tr>
                <tr>
                    <td>Password :- </td>
                    <td><input type="text" onChange={ (e) => setPassword(e.target.value) } value={password}/></td>
                </tr>
                <tr>
                    <td>Email :- </td>
                    <td><input type="submit" value="Login"/></td>
                </tr>
            </table>
        </form>
        <ToastContainer/>
    </center>
  )
}

export default Login