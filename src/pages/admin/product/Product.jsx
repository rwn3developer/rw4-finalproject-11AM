import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import Leftsiderbar from '../Leftsiderbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Product = () => {

  const [products,setProduct] = useState([]);
  const [mstatus,setMarket] = useState(["latest","upcomming","best"])
  const [status,setStatus] = useState(["active","inactive"])
  const [changeMarket,setChangeMarket] = useState("");

    const changeMarketStatus = async(id,value) => {
        try{
          let record = await axios.patch(`http://localhost:8000/products/${id}`,{
            market : value
          })
          toast.success("Market status successfully add");
        }catch(err){
          console.log(err);
          return false;
        }
    }


  const getProduct = async() => {
    try{
        let {data} = await axios.get(`http://localhost:8000/products`);
        setProduct(data);
    }catch(err){
        console.log(err);
        return false;
    }
}

useEffect(()=>{
  getProduct();
},[])

  return (
    <div>
      <Header />
      <div className='row p-5 shadow'>
        <div className='col-lg-3'>
          <Leftsiderbar />
        </div>

        <div className='col-lg-9'>
          <h3>View Product</h3>

          <div className="row">
            <div className="col-lg-8">
              <Link to={`/admin/addproduct`}>
                <button className='btn btn-primary btn-sm'>Add</button>
              </Link>

              <table className="table mt-3">
                <thead className='table-primary'>
                  <tr>
                    <th scope="col">Srno</th>
                    <th scope="col">Category</th>
                    <th scope="col">Product</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Description</th>
                    <th scope="col">Market Status</th>
                    <th scope="col">Status</th>


                  </tr>
                </thead>
                <tbody>
                  {
                    products.map((item, i) => {
                      i = i + 1
                      return (
                        <tr>
                          <td scope="row">{i}</td>
                          <td>{item.category}</td>
                          <td>{item.product}</td>
                          <td>
                              <img src={item.image} width="100"/>
                          </td>
                          <td>{item.price}</td>
                          <td>{item.qty}</td>
                          <td>{item.description}</td>
                          <td>
                            <select onChange={ (e) => changeMarketStatus(item.id,e.target.value) }  className='form-control'>
                                <option>---select market status</option>
                                {
                                  mstatus.map((val)=>{
                                    return(
                                      item.market == val ? (
                                        <option selected>{val}</option>
                                      ) : (
                                        <option>{val}</option>
                                      )
                                    )
                                   
                                     
                                    
                                  })
                                }
                               
                            </select>
                          </td>
                          <td>
                            <select  className='form-control'>
                                <option>---select status</option>
                               {
                                  status.map((val)=>{
                                    return (
                                      item.status == val ? (
                                        <option value={val} selected>{val}</option>
                                      ) : (
                                        <option value={val}>{val}</option>
                                      )
                                    )
                                  })
                               }

                            </select>
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

export default Product