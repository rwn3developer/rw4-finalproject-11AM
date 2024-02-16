import React from 'react'
import Header from '../../Header'
import Leftsiderbar from '../Leftsiderbar'
import axios from 'axios'

const Addproduct = () => {

    const handleSubmit= async(e) => {
        e.preventDefault();
      
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
                        <div className='row'>
                            <div className="col-lg-6">
                                    <div className='p-4 shadow'>
                                        <form>
                                            <div className="form-group mb-3">
                                                <label htmlFor="exampleInputEmail1">Category</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter category" />
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor="exampleInputEmail1">Product name</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter product" />
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor="exampleInputEmail1">Price</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter category" />
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor="exampleInputEmail1">Qty</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter category" />
                                            </div>

                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addproduct
