import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import Leftsiderbar from '../Leftsiderbar'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addproduct = () => {

    const [categoryRecord,setCategoryRecord] = useState([]);

    const [category,setCategory] = useState("")
    const [product,setProduct] = useState("")
    const [price,setPrice] = useState("")
    const [qty,setQty] = useState("")
    const [description,setDescription] = useState("")
    const [image,setImage] = useState("")
    const [market,setMarket] = useState("")
    const [status,setStatus] = useState("")

        const getCategory = async() => {
            try{
                let {data} = await axios.get(`http://localhost:8000/category`);
                setCategoryRecord(data);
            }catch(err){
                console.log(err);
                return false;
            }
        }

        useEffect(()=>{
            getCategory();
        },[])

    const handleSubmit= async(e) => {
        e.preventDefault();
        try{
            let addproduct = await axios.post(`http://localhost:8000/products`,{
                category : category,
                product : product,
                price : price,
                qty : 1,
                description : description,
                image : image,
                market : market,
                status : status
            })
            toast.success("Product successfully add")
        }catch(err){
            console.log(err);
            return false;
        }
      
    }

    return (
        <div>
            <div>
                <Header />
                <div className='row p-5 shadow'>
                    <div className='col-lg-3'>
                        <Leftsiderbar />
                    </div>

                    <div className='col-lg-9'>
                        <h3>Add Product</h3>
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className="col-lg-6">
                                            <div className='p-4 shadow'>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="exampleInputEmail1">Category</label>
                                                            <select onChange={ (e) => setCategory(e.target.value)  } value={category} type="text" className="form-control">
                                                                <option value="">select category</option>
                                                                {
                                                                    categoryRecord.map((cat)=>{
                                                                        return (
                                                                            <option value={cat.name}>{cat.category}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="exampleInputEmail1">Product name</label>
                                                        <input type="text" className="form-control" onChange={ (e) => setProduct(e.target.value)  } value={product}  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter product name" />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="exampleInputEmail1">Price</label>
                                                        <input type="text" className="form-control" onChange={ (e) => setPrice(e.target.value)  } value={price} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter price" />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="exampleInputEmail1">Qty</label>
                                                        <input type="text" className="form-control" onChange={ (e) => setQty(e.target.value)  } value={qty}  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter qty" />
                                                    </div>
                                            </div>
                                </div>

                                <div className="col-lg-6">
                                            <div className='p-4 shadow'>
                                            
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="exampleInputEmail1">Description</label>
                                                        <input type="text" className="form-control" onChange={ (e) => setDescription(e.target.value)  } value={description} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter description" />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="exampleInputEmail1">Image</label>
                                                        <input type="text" className="form-control" onChange={ (e) => setImage(e.target.value)  } value={image} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter image url" />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="exampleInputEmail1">Market Status</label>
                                                        <select onChange={ (e) => setMarket(e.target.value)  } value={market}  type="text" className="form-control">
                                                            <option value="">select marketstatus</option>
                                                            <option value="latest">Latest</option>
                                                            <option value="upcomming">Upcomming</option>
                                                            <option value="best">Best</option>
                                                        </select>
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="exampleInputEmail1">Status</label>
                                                            <select  type="text" onChange={ (e) => setStatus(e.target.value)  } value={status} className="form-control">
                                                                <option value="">select status</option>
                                                                <option value="active">Active</option>
                                                                <option value="deactive">Deactive</option>
                                                            </select>
                                                        </div>

                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addproduct
