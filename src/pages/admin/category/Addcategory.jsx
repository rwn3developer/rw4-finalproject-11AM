import React, { useState } from 'react'
import Leftsiderbar from '../Leftsiderbar'
import Header from '../../Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Addcategory = () => {

    const [category,setCategory] = useState("");

    const handleSubmit= async(e) => {
        e.preventDefault();
       try{
            let categoryrecord = await axios.post(`http://localhost:8000/category`,{
                category : category
            })
            toast.success("Category successfully add");
            setCategory("");
       }catch(err){
            console.log(err)
          return false
       } 
    }

    return (
        <div>
            <Header />
            <div className='row p-5 shadow'>
                <div className='col-lg-3'>
                    <Leftsiderbar />
                </div>

                <div className='col-lg-9'>
                    <h3>Add Category</h3>
                    <div className='row'>
                        <div className="col-lg-8">
                            <div className='p-4 shadow'>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <label htmlFor="exampleInputEmail1">Category</label>
                                        <input type="text" onChange={ (e) => setCategory(e.target.value) }  value={category}   className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter category" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addcategory