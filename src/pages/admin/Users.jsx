import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Leftsiderbar from './Leftsiderbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Users = () => {

    const [users,setUsers] = useState([]);

    const getUsers = async() => {
        try{
            let {data} = await axios.get(`http://localhost:8000/users?role=user`);
            setUsers(data)
        }catch(err){
            console.log(err);
            return false;
        }
    }

    useEffect(()=>{
        getUsers();
    },[])

    return (
        <div>
            <Header />
            <div className='row p-5 shadow'>
                <div className='col-lg-3'>
                    <Leftsiderbar />
                </div>

                <div className='col-lg-9'>
                    <h3>Users</h3>

                    <div className="row">
                        <div className="col-lg-8">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Srno</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    users.map((val,i)=>{i++
                                        return (
                                            <tr>
                                                <th scope="row">{i}</th>
                                                <td>{val.name}</td>
                                                <td>{val.email}</td>
                                                <td>
                                                    <Link>
                                                        <button className='btn btn-success btn-sm'>View</button>
                                                    </Link>
                                                    <button className='btn btn-danger btn-sm mx-2'>Delete</button>
                                                    <button className='btn btn-primary btn-sm'>Edit</button>

                                                </td>
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

export default Users