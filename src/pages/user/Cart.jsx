import React, { useEffect } from 'react'
import Header from '../Header'
import { useState } from 'react'
import axios from 'axios';
import { useAuth } from '../../context/Auth';
const Cart = () => {
    const [cart,setCart] = useState([]);
    const [auth,setAuth] = useAuth();
    const getCart = async() => {
        try{
            let {data} = await axios.get(`http://localhost:8000/carts?user=${auth.user.id}`);
            setCart(data);
        }catch(err){
            console.log(err);
            return false
        }
    }
    useEffect(()=>{
        getCart();
    },[auth.user?.id])

  return (
    <div>
        <Header/>

        <div className='container'>
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Srno</th>
                                    <th>Product</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                    cart.map((val,i)=>{i++
                                        return (
                                            <tr>
                                                <td>{i}</td>
                                                <td>{val.product}</td>
                                                <td>
                                                    <img src={val.image} width="70"/>
                                                </td>
                                                <td>{val.price}</td>
                                                <td>
                                                    <input type='number' className='form-control w-25' value="1"/>
                                                </td>
                                                <td>{val.price * val.qty}</td>
                                                <td>
                                                    <button className='btn btn-danger btn-sm'>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                               }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Cart