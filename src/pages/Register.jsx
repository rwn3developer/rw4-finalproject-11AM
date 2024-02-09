import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    let URL = `http://localhost:8000/users`;
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            let rec = await axios.post(`${URL}`,{
                name : name,
                email : email,
                password : password,
                role : "user"
            });
            alert("User successfully insert");
            setName("");
            setEmail("");
            setPassword("");
            navigate(`/`);
        }catch(err){
            console.log(err);
            return false;
        }
        
    }

  return (
    <center>
        <h1>Register Admin</h1>
        <form onSubmit={handleSubmit}>
            <table border={1}>
                <tr>
                    <td>Name :- </td>
                    <td><input type="text" onChange={ (e) => setName(e.target.value) } value={name}/></td>
                </tr>
                <tr>
                    <td>Email :- </td>
                    <td><input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/></td>
                </tr>
                <tr>
                    <td>Password :- </td>
                    <td><input type="text" onChange={ (e) => setPassword(e.target.value) } value={password}/></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="Login"/></td>
                </tr>
            </table>
        </form>
    </center>
  )
}

export default Register