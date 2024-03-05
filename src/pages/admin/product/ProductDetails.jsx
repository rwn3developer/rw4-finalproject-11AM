import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../../context/Auth'

const ProductDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [product,setProduct] = useState({});
    const[auth,setAuth] = useAuth();

     //if user is admin this access
     useEffect(()=>{
        if(auth?.user?.role === "user"){
            navigate('/')
        } 
    })

    const getProduct = async() => {
        try{
            let {data} = await axios.get(`http://localhost:8000/products/${id}`);
           setProduct(data)
        }catch(err){
            console.log(err);
            return false;
        }
    }

    useEffect(()=>{
        getProduct();
    },[])

  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <div className='p-5 shadow'>
                        <h3 align="center">Product Details</h3>
                        <div className='row'>
                                <div className='col-md-4'>
                                  <img src={product.image} width="200"/>
                                </div>  
                                <div className='col-md-6'>
                                    <h3>Name :- {product.product}</h3>
                                    <h3>Price :- {product.price}</h3>
                                    <p>{product.description}</p>
                                    <button className='btn btn-primary'>Add Cart</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container mt-5'>
            <div className="row p-5 shadow">
                <div className="col-md-12">
                    <h3 align="center">Similar product</h3>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductDetails