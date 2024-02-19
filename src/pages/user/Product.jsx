import React, { useEffect, useState } from 'react'
import Header from '../Header'
import axios from 'axios';

const UserProduct = () => {
    
    const [products,setProducts] = useState([]);

    const [marketStateFilter,setMarketStatusFilter] = useState("");

    const getAllProduct = async() => {
        try{
            let {data} = await axios.get(`http://localhost:8000/products`);
            setProducts(data);
        }catch(err){
            console.log(err);
            return false;
        }
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/products?market=${marketStateFilter}`)
        .then((res)=>{
            setProducts(res.data)
        }).catch((err)=>{
            console.log(err);
            return false;
        })
        
       
    },[marketStateFilter])

    useEffect(()=>{
        getAllProduct();
    },[])

    return (
        <div>
            <Header />
            <div className='mt-2'>
                <div className='row p-5 shadow'>
                    <div className='col-lg-3'>
                        <h2>Filter</h2>
                    </div>
                    <div className='col-lg-9'>

                       

                        <h2>Product</h2>

                        <div className='row mb-3'>
                            <div className='col-lg-3'>
                                <select className='form-control'>
                                    <option>---select status---</option>
                                    <option>hight to low</option>
                                    <option>low to high</option>
                                </select>
                            </div>

                            <div className='col-lg-6'></div>

                            <div className='col-lg-3'>
                                <select onChange={ (e) => setMarketStatusFilter(e.target.value) }  value={marketStateFilter} className='form-control'>
                                    <option value="">---select status---</option>
                                    <option value="latest">latest</option>
                                    <option value="best">best</option>
                                    <option value="upcomming">upcomming</option>
                                </select>
                            </div>

                           

                           

                           

                        </div>

                        <div className='row'>
                            {
                                products.map((val)=>{
                                    return (
                                        <div className='col-lg-3'>
                                            <div className="card p-3 mb-5 text-center" style={{ width: '18rem'}}>
                                                <img src={val.image}  style={{objectFit : "contain",height:"250px"}} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{val.product}</h5>
                                                    <hr />
                                                    <p className="card-text">{val.description}</p>
                                                    <h5>{val.price}</h5>
                                                    <button className="btn btn-primary">Add Cart</button>
                                                </div>
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
    )
}

export default UserProduct