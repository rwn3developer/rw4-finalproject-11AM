import React from 'react'
import Header from '../Header'
import Leftsiderbar from './Leftsiderbar'

const Dashboard = () => {
  return (
        <div>
            <Header/>
            <div className='container'>
                <div className="row">
                   <div className='main mt-5'>
                      <h3 className='text-center'>Dashboard</h3>
                   </div>
                </div>

                <div className='row'>
                      <div className='col-lg-3'>
                          <Leftsiderbar/>
                      </div>

                      <div className='col-lg-9'>
                          <h1>Item</h1>
                      </div>
                </div>

            </div>  
        </div>
  )
}

export default Dashboard