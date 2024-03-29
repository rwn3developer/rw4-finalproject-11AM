import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import { useAuth } from '../context/Auth';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import {gauth, googleAuthProvider} from '../firebase';

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
                //role base auth if admin login redirect admin/dashboard another home route redirect
                if(data[0].role === "admin"){
                      navigate('/admin/dashboard');
                }else{
                    navigate('/home');
                }
              
           }else{
            alert("Email and Password not valid");
           }
        } catch (err) {
            console.log(err);
            return false;
        }
        setEmail("");
        setPassword("");
        
    }

    const googleLogin = async() => {
        try{
            const result = await signInWithPopup(gauth,googleAuthProvider);
            console.log(result);
        }catch(err){
            console.log(err);
            return false;
        }
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
               
                </div><br></br>
                <button onClick={ () => googleLogin() }>Login with google</button>
            </div>
           
            <ToastContainer />
        </>

    )
}

export default Login