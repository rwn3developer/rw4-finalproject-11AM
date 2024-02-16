import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import Leftsiderbar from '../Leftsiderbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Product = () => {

  const [products,setProduct] = useState([]);

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
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Description</th>





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