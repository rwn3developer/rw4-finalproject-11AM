import React, { useEffect, useState } from 'react'
import Header from '../Header'
import axios from 'axios';

const Home = () => {

    const [bestmobile,setBestMobile] = useState([]);

    const bestElectronics = async() => {
        let {data} = await axios.get(`http://localhost:8000/products?category=mobile&market=best`);
        setBestMobile(data)
    }

    useEffect(()=>{
        bestElectronics();
    },[])

    return (
        <div>
            <Header />
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={`https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/340993fa504d1c6c.jpg?q=20`} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={`https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/913d0fa8ef6b8ff7.jpeg?q=20`} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={`https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/299013e0bba29562.jpg?q=50`} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='mt-5'>
                <div className="container">
                    <div className="row shadow p-5">
                        <h3>Best Mobile</h3>
                        {
                            bestmobile.map((val)=>{
                                return (
                                    <div className="col-lg-3">
                                        <div className="card p-4" style={{ width: '18rem' }}>
                                            <img src={val.image} height="200" style={{objectFit : "contain"}} className="card-img-top" alt="..." />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">{val.product}</h5>
                                                <p className="card-text">{val.price}</p>
                                            </div>
                                        </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home