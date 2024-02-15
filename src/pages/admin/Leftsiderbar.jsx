import React from 'react'
import { Link } from 'react-router-dom'

const Leftsiderbar = () => {
    return (
        <div className='row'>
            <div className='col-lg-12'>
                <ul class="list-group">
                   
                        <li class="list-group-item" aria-disabled="true">
                            <Link to={`/admin/dashboard`} className='btn btn-info w-100'>
                                Dashboard
                            </Link>
                        </li>

                        <li class="list-group-item" aria-disabled="true">
                            <Link to={`/admin/category`} className='btn btn-info w-100'>
                                Category
                            </Link>
                        </li>

                        <li class="list-group-item" aria-disabled="true">
                            <Link to={`/admin/product`} className='btn btn-info w-100'>
                                Product
                            </Link>
                        </li>

                        
                    
                    
                    
                </ul>
            </div>
        </div>
    )
}

export default Leftsiderbar
