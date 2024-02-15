import React from 'react'
import Header from '../../Header'
import Leftsiderbar from '../Leftsiderbar'

const Category = () => {
  return (
   <div>
        <Header/>
                <div className='row p-5 shadow'>
                      <div className='col-lg-3'>
                          <Leftsiderbar/>
                      </div>

                      <div className='col-lg-9'>
                          <h1>Item</h1>
                      </div>
                </div>

            </div>  
  )
}

export default Category
