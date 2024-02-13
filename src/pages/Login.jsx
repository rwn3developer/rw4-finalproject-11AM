import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import { useAuth } from '../context/Auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // let URL = `http://localhost:8000/users`;
    // console.log(useAuth());
    const navigate = useNavigate();
    const [auth,setAuth] = useAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let { data } = await axios.get(`http://localhost:8000/users/?email=${email}&password=${password}`);
            if(data.length !== 0){

                localStorage.setItem('userLogin',JSON.stringify(data[0]));
                setAuth({
                    ...auth,
                    user : data[0]
                })
                setEmail("");
                setPassword(""); 
                navigate('/product')
                    
           }else{
            alert("Email and Password not valid");
            navigate('/')
           }
        } catch (err) {
            console.log(err);
            return false;
        }
        setEmail("");
        setPassword("");
        navigate('/');
    }

   
    return (
        <>
            <Header />
            <div className='container'>
                <div className='row mt-5'>
                <div className='col-lg-9'>
                    <form onSubmit={handleSubmit}>
                        <table border={1}>
                            <tr>
                                <td>Email :- </td>
                                <td><input type="text" onChange={(e) => setEmail(e.target.value)} value={email} /></td>
                            </tr>
                            <tr>
                                <td>Password :- </td>
                                <td><input type="text" onChange={(e) => setPassword(e.target.value)} value={password} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="submit" value="Login" /></td>
                            </tr>
                        </table>
                    </form>
                </div>
                </div>
            </div>
            <ToastContainer />
        </>

    )
}

export default Login