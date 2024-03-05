import React, { useEffect } from 'react'
import Header from '../Header'
import Leftsiderbar from './Leftsiderbar'
import { useAuth } from '../../context/Auth'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  const [auth,setAuth] = useAuth();

  //if user is admin this access
  useEffect(()=>{
    if(auth?.user?.role === "user"){
        navigate('/')
    } 
  })

  return (
        <div>
                <Header/>
                <div className='row p-5 shadow'>
                      <div className='col-lg-3'>
                          <Leftsiderbar/>
                      </div>

                      <div className='col-lg-9'>
                          <h3>Dashboard</h3>
                      </div>
                </div>

            
        </div>
  )
}

export default Dashboard