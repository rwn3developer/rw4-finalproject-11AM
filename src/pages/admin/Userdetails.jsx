import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../../context/Auth';

const Userdetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [auth,setAuth] = useAuth();
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);

     //if user is admin this access
     useEffect(()=>{
        if(auth?.user?.role === "user"){
            navigate('/')
        } 
    })

    const getUser = async () => {
        try {
            let { data } = await axios.get(`http://localhost:8000/users/${id}`);
            setUser(data)
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const getCart = async () => {
        try {
            let { data } = await axios.get(`http://localhost:8000/carts?user=${id}`);
            setCart(data);
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    useEffect(() => {
        getUser();
        getCart();
    }, [])

    return (
        <div>
            <Header />
            <div className='container mt-5'>
                <div className="row shadow p-5">
                    <div className="col-md-9">
                        <h3>User Details</h3>
                        <h5>Name :- {user?.name}</h5>
                        <h5>Email :- {user?.email}</h5>


                        <div className='mt-3'>
                            <h3>Carts</h3>
                            <div className='d-flex flex-wrap justify-content-between'>
                                {
                                    cart.map((val) => {
                                        return (
                                            <div className="card p-3" style={{ width: '18rem' }}>
                                                <img src={val.image} height="200" style={{objectFit:"contain"}} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{val.product}</h5>
                                                    <p className="card-text">{val.price}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userdetails
