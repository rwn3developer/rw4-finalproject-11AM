import React, { useEffect, useState } from 'react'
import Header from '../Header'
import axios from 'axios';
import { useAuth } from '../../context/Auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserProduct = () => {

    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [cat, setCat] = useState("");


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

    //market status wise filter
    useEffect(() => {
        axios.get(`http://localhost:8000/products?market=${marketStateFilter}&category=${cat}`)
            .then((res) => {
                console.log(cat);
                setProducts(res.data)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }, [marketStateFilter])

    //category wise product filter
    const categoryFilter = async (cate) => {
        try {
            let { data } = await axios.get(`http://localhost:8000/products?category=${cate}&market=${marketStateFilter}`);
            setCat(cate)
            setProducts(data)
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    //add cart
    const AddCart = async (id) => {
        try {
            if (!auth.user) {
                alert("Login please here")
                navigate('/');
            }
            let singleProduct = await axios.get(`http://localhost:8000/products/${id}`);
            //  console.log(auth.user.id);
            let record = singleProduct.data;

            let dup = await axios.get(`http://localhost:8000/carts?user=${auth.user.id}&productId=${record.id}`)
            // console.log(!(dup.data != 0));
            if (!(dup.data != 0)) {
                let addcart = await axios.post(`http://localhost:8000/carts`, {
                    product: record.product,
                    price: record.price,
                    qty: record.qty,
                    image: record.image,
                    user: auth.user.id,
                    productId: record.id
                })
                toast.success("Product successfully add to cart") 
            } else {
                toast.error("Product already added");
                return false;
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

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
                                                <button onClick={() => categoryFilter(val.category)} className='w-100 mb-3 btn btn-info'>{val.category}</button>
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
                            <button onClick={() => getAllProduct()} className='w-100 mb-3 btn btn-info'>All Clear</button>
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
                                <input type='search' className='form-control' placeholder='Product search here' />
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
                                                    <button onClick={() => AddCart(val.id)} className="btn btn-primary btn-sm">Add Cart</button>
                                                    <Link to={`/productdetails/${val.id}`}>
                                                        <button className="btn btn-success btn-sm ms-2">View Details</button>
                                                    </Link>
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