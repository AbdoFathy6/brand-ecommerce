import React from 'react';
import '../../assets/css/main.css'
import img108 from '../../assets/images/image-1.png'
import img102 from '../../assets/images/image-2.png'
import img106 from '../../assets/images/image-2.png'
import Mask from '../../assets/images/image-4.png'
import { FaSearch } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
const Services = () => {
    return (
        <section className='data-2  '>
            <div className=" text-black">
                <h3>Our extra services</h3>
            </div>
            <div className="content-4">
                <div className="row gx-4 mb-3">
                    <div className="col-xl-3 col-sm-6 mb-3 cardsec7">
                        <div className="card">
                            <img src={img108} className="card-img-top" height="132px" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-black">
                                    Source from
                                    <br />
                                    Industry Hubs
                                </p>
                                <div className="icon-end position-absolute">
                                    <FaSearch className='mb-2' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-3 cardsec7">
                        <div className="card">
                            <img src={img102} className="card-img-top" height="132px" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-black">
                                    Customize Your
                                    <br />
                                    Products
                                </p>
                                <div className="icon-end position-absolute">
                                    <FaArchive className='mb-2' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-3 cardsec7">
                        <div className="card ">
                            <img src={img106} className="card-img-top" height="132px" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-black">
                                    Fast, reliable shipping
                                    <br />
                                    by ocean or air
                                </p>
                                <div className="icon-end position-absolute">
                                    <FaPaperPlane className='mb-2' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-3 cardsec7">
                        <div className="card ">
                            <img src={Mask} className="card-img-top" height="132px" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-black">
                                    Product monitoring
                                    <br />
                                    and inspection
                                </p>
                                <div className="icon-end position-absolute">
                                    <FaShieldAlt className='mb-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
