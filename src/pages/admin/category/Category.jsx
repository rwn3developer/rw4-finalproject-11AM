import React from 'react'
import Header from '../../Header'
import Leftsiderbar from '../Leftsiderbar'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Category = () => {
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
                                    <tr>
                                        <th scope="row">1</th>
                                       
                                    </tr>
                                  
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
