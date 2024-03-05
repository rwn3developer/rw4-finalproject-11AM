import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import Leftsiderbar from '../Leftsiderbar'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useAuth } from '../../../context/Auth';


const Category = () => {
    const navigate = useNavigate();
    const [auth,setAuth] = useAuth();
    const [category,setCategory] = useState([]);

     //if user is admin this access
     useEffect(()=>{
        if(auth?.user?.role === "user"){
            navigate('/')
        } 
    })

    const getCategory = async() => {
        try{
            let {data} = await axios.get(`http://localhost:8000/category`);
            setCategory(data);
        }catch(err){
            console.log(err);
            return false;
        }
    }

    useEffect(()=>{
        getCategory();
    },[])

    return (
            <div>
                <Header />
                <div className='row p-5 shadow'>
                    <div className='col-lg-3'>
                        <Leftsiderbar />
                    </div>

                    <div className='col-lg-9'>
                        <h3>View Category</h3>

                        <div className="row">
                            <div className="col-lg-8">
                                <Link to={`/admin/addcategory`}>
                                    <button className='btn btn-primary btn-sm'>Add</button>
                                </Link>

                                <table className="table mt-3">
                                    <thead className='table-primary'>
                                        <tr>
                                            <th scope="col">Srno</th>
                                            <th scope="col">Category</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            category.map((item,i)=>{i=i+1
                                                return (
                                                    <tr>
                                                        <td scope="row">{i}</td>
                                                        <td>{item.category}</td>
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
            </div>
    )
}

export default Category
