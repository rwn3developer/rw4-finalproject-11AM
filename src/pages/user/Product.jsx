import React, { useEffect, useState } from 'react'
import Header from '../Header'
import axios from 'axios';

const UserProduct = () => {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);

    const [marketStateFilter, setMarketStatusFilter] = useState("");

    const getCategory = async () => {
        try {
            let { data } = await axios.get(`http://localhost:8000/category`);
            setCategory(data);
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const getAllProduct = async () => {
        try {
            let { data } = await axios.get(`http://localhost:8000/products`);
            setProducts(data);
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/products?market=${marketStateFilter}`)
            .then((res) => {
                setProducts(res.data)
            }).catch((err) => {
                console.log(err);
                return false;
            })


    }, [marketStateFilter])

    useEffect(() => {
        getCategory();
        getAllProduct();
    }, [])

    return (
        <div>
            <Header />
            <div className='mt-2'>
                <div className='row p-5'>
                    <div className='col-lg-3 p-5'>
                        <h4>Filter</h4>

                        <div className='category-filter mt-3'>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    {
                                        category.map((val) => {
                                            return (
                                                <button className='w-100 mb-3 btn btn-info'>{val.category}</button>
                                            )
                                        })
                                    }
                                    
                                </li>
                            </ul>
                        </div>

                        <div className='price-filter mt-5'>
                            <h4>Price Wise filter</h4>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">1000 - 10000</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">10000 - 30000</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">30000 - 60000</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">60000 - 100000</label>
                            </div>
                        </div>

                       <div className='all-clear mt-5'> 
                            <button className='w-100 mb-3 btn btn-info'>All Clear</button>
                       </div>


                        {/* <select className='form-control'>
                            <option>---select category---</option>
                            {
                                category.map((val)=>{
                                    return (
                                        <option>{val.category}</option>
                                    )
                                })
                            }
                        </select> */}
                    </div>
                    <div className='col-lg-9 p-5 shadow'>
                        <h2>Product</h2>

                        <div className='row mb-3'>
                            <div className='col-lg-3'>
                                <select className='form-control'>
                                    <option>---select status---</option>
                                    <option>hight to low</option>
                                    <option>low to high</option>
                                </select>
                            </div>

                            <div className='col-lg-6'>
                                <input type='search' className='form-control' placeholder='Product search here'/>
                            </div>

                            <div className='col-lg-3'>
                                <select onChange={(e) => setMarketStatusFilter(e.target.value)} value={marketStateFilter} className='form-control'>
                                    <option value="">---select status---</option>
                                    <option value="latest">latest</option>
                                    <option value="best">best</option>
                                    <option value="upcomming">upcomming</option>
                                </select>
                            </div>
                        </div>

                        <div className='row'>
                            {
                                products.map((val) => {
                                    return (
                                        <div className='col-lg-3'>
                                            <div className="card p-3 mb-5 text-center" style={{ width: '18rem' }}>
                                                <img src={val.image} style={{ objectFit: "contain", height: "250px" }} className="card-img-top" alt="..." />
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