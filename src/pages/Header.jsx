import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../context/Auth';

function Header() {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
 
  const logout = () => {
     localStorage.removeItem('userLogin');
     setAuth({
          ...auth,
          user : ""
     })
     navigate("/");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">


            {
              (!auth.user) ? (<>
                <li className="nav-item">
                  <Link to={`/`} className="nav-link active" aria-current="page">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to={`/register`} className="nav-link active" aria-current="page">Register</Link>
                </li>
              </>) : (
                <li className="nav-item">
                  <Link onClick={ () => logout() } className="nav-link active btn btn-danger btn-sm text-white" aria-current="page">Logout</Link>
                </li>
              )
            }






            
            <li className="nav-item">
              <Link to={`/home`} className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={`/product`} className="nav-link">Product</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Details
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="#">Name :- {auth.user?.name}</Link></li>
                <li><Link className="dropdown-item" href="#">Email :- {auth.user?.email}</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="#">{auth.user?.role}</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to={`/cart`} className="nav-link" aria-disabled="true">Cart</Link>
            </li>
          </ul>

        </div>
      </div>
      <ToastContainer />
    </nav>

  )
}

export default Header
