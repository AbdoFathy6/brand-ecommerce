import React from 'react';

import { Container } from 'react-bootstrap';
import { GoCheck } from "react-icons/go";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const DescriptionOfProduct = ({ products }) => {


    return (
        <section className=' d-lg-flex d-md-flex d-none  gap-3 mt-3'>
            <article className='bg-light col-lg-9  rounded border'>
                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="mb-3 shadow border-bottom p-2 bg-light"
                >
                    <Tab eventKey="home" title="Description" >
                        <Container>
                            <div className="card-body">
                                <p className="card-title">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>

                                <table className="table w-75 border mt-4 mb-4">
                                    <tbody>
                                        {[
                                            { label: 'Model', value: '#8786867' },
                                            { label: 'Style', value: 'Classic style' },
                                            { label: 'Certificate', value: 'ISO-898921212' },
                                            { label: 'Size', value: '34mm x 450mm x 19mm' },
                                            { label: 'Memory', value: '36GB RAM' },
                                        ].map((row, index) => (
                                            <tr key={index}>
                                                <th scope="row" className="bg-secondary">{row.label}</th>
                                                <td>{row.value}</td>
                                            </tr>

                                        ))}
                                    </tbody>
                                </table>

                                <div className="card-text">
                                    {[
                                        { icon: <GoCheck />, text: 'Some great feature name here' },
                                        { icon: <GoCheck />, text: 'Lorem ipsum dolor sit amet, consectetur' },
                                        { icon: <GoCheck />, text: 'Duis aute irure dolor in reprehenderit' },
                                        { icon: <GoCheck />, text: 'Some great feature name here' }
                                    ].map((feature, index) => (
                                        <p key={index}>
                                            <i className="fa fa-check" aria-hidden="true"></i>       {feature.icon} {feature.text}

                                        </p>
                                    ))}
                                </div>
                            </div>
                        </Container>                    </Tab>
                    <Tab eventKey="profile" title="Reviews" >
                        <Container>
                            <div className="card-body">
                                <p className="card-title">
                                    Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of stretchy, light, and inexpensive fabric and are easy to clean
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                                </p>



                                <div className="card-text">
                                    {[
                                        { icon: <GoCheck />, text: 'Some great feature name here' },
                                        { icon: <GoCheck />, text: 'Lorem ipsum dolor sit amet, consectetur' },
                                        { icon: <GoCheck />, text: 'Duis aute irure dolor in reprehenderit' },
                                        { icon: <GoCheck />, text: 'Some great feature name here' }
                                    ].map((feature, index) => (
                                        <p key={index}>
                                            <i className="fa fa-check" aria-hidden="true"></i>       {feature.icon} {feature.text}

                                        </p>
                                    ))}
                                </div>
                            </div>
                        </Container>                    </Tab>
                    <Tab eventKey="Shipping" title="Shipping" >
                        <Container>
                            <div className="card-body">
                                <p className="card-title">
                                    Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of stretchy, light, and inexpensive fabric and are easy to clean
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                                </p>



                                <div className="card-text">
                                    {[
                                        { icon: <GoCheck />, text: 'Some great feature name here' },
                                        { icon: <GoCheck />, text: 'Lorem ipsum dolor sit amet, consectetur' },
                                        { icon: <GoCheck />, text: 'Duis aute irure dolor in reprehenderit' },
                                        { icon: <GoCheck />, text: 'Some great feature name here' }
                                    ].map((feature, index) => (
                                        <p key={index}>
                                            <i className="fa fa-check" aria-hidden="true"></i>       {feature.icon} {feature.text}

                                        </p>
                                    ))}
                                </div>
                            </div>
                        </Container>                       </Tab>
                    <Tab eventKey="contact" title="About seller" >
                        <Container>
                            <div className="card-body">
                                <p className="card-title">
                                    Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of stretchy, light, and inexpensive fabric and are easy to clean
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>



                                <div className="card-text">
                                    {[
                                        { icon: <GoCheck />, text: 'Some great feature name here' },
                                        { icon: <GoCheck />, text: 'Lorem ipsum dolor sit amet, consectetur' },
                                        { icon: <GoCheck />, text: 'Duis aute irure dolor in reprehenderit' },
                                        { icon: <GoCheck />, text: 'Some great feature name here' }
                                    ].map((feature, index) => (
                                        <p key={index}>
                                            <i className="fa fa-check" aria-hidden="true"></i>       {feature.icon} {feature.text}

                                        </p>
                                    ))}
                                </div>
                            </div>
                        </Container>                       </Tab>
                </Tabs>



            </article>
            <div className="col d-lg-block d-none">
                <article className="card p-2">
                    <h5 className="card-title">You may like</h5>
                    {products.slice(10, 15).map((product) => (
                        <div className="card border-0 d-flex flex-row  mb-3" key={product.id}>
                            <div className="col-4  ">
                                <div className="row  g-0">

                                    <img
                                        src={product.image}
                                        className="img-fluid border rounded p-2"
                                        alt={product.title}
                                        style={{ height: '78px', width: '96px' }}
                                    />
                                </div>
                            </div>

                            <div className="col-8">
                                <div className="card-body pt-0">
                                    <p className="card-title">{product.title.slice(0, 15)}</p>
                                    <p className="card-text">
                                        <small className="text-body-secondary">${product.price} - $99.50</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </article>
            </div>
        </section>
    )
}

export default DescriptionOfProduct;
