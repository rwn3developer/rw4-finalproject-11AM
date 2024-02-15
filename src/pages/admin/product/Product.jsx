import React from 'react'
import Header from '../../Header'
import Leftsiderbar from '../Leftsiderbar'

const Product = () => {
  return (
    <div>
        <Header/>
        <div className='row p-5 shadow'>
                      <div className='col-lg-3'>
                          <Leftsiderbar/>
                      </div>

                      <div className='col-lg-9'>
                          <h3>Product</h3>
                      </div>
                </div>

    </div>
  )
}

export default Product