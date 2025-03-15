import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/css/Cart-2.css';
import { FaChevronLeft } from 'react-icons/fa';
import pay1 from '../../assets/Flag/payment.png';
import pay2 from '../../assets/Flag/pay3.png';
import pay3 from '../../assets/Flag/VISA.png';
import pay4 from '../../assets/Flag/ApplePay.png';
import pay5 from '../../assets/Flag/payment.png';
import Car from '../../assets/Flag/Car.png';
import Message2 from '../../assets/Flag/message-2.png';
import Lock from '../../assets/Flag/Lock.png';
import { Card, Image, Form, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, updateQuantity } from '../../../src/store/slices/cartSlice';
import { HiArchiveBoxXMark } from "react-icons/hi2";

const CardItems = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    const handleRemove = (item) => {
        dispatch(removeFromCart(item));
    };
    const handleQuantityChange = (item, change) => {
        const newQuantity = item.quantity + change;

        if (newQuantity > 0) {
            dispatch(updateQuantity({ ...item, quantity: newQuantity })); // Assume you have an action to update quantity
        }
    };


    const subtotal = cart.reduce((acc, product) => acc + product.price * (product.quantity), 0);
    const discount = 10;
    const tax = (subtotal - discount) * 0.1;
    const total = subtotal - discount + tax;

    return (
        <>
            <h3 className="card-title text-black my-4 ms-4 d-lg-block d-none">My cart({cart.length})</h3>
            <div className="row mb-3">
                <div className="col-lg-9 p-0">
                    <article className="bg-white m-0 mb-lg-4 container">
                        {cart.map((product) => (
                            <div key={product.id}>
                                <div className="d-none border-bottom d-lg-block">
                                    <Card className="border-0">
                                        <Row className="border-bottom d-flex align-items-center">
                                            <Col xs={3} style={{ height: '80px', width: '80px' }}>
                                                <Image
                                                    src={product.image}
                                                    rounded
                                                    className="p-2"
                                                    style={{ height: '80px', width: '80px', backgroundColor: '#F7F7F7', padding: '6px' }}
                                                    alt="Product"
                                                />
                                            </Col>

                                            <Col xs={6}>
                                                <Card.Body className="p-0">
                                                    <Card.Title className="h5">
                                                        {product.title?.split(' ').slice(0, 4).join(' ') || ''}
                                                    </Card.Title>
                                                    <Card.Text className="text-muted">
                                                        {product.description?.split(' ').slice(0, 10).join(' ') || ''}
                                                    </Card.Text>
                                                    <div className="d-flex align-items-center">
                                                        <Button

                                                            size="sm"
                                                            className="m-2 ms-0 border rounded btn-light text-danger"
                                                            onClick={() => handleRemove(product)}
                                                        >
                                                            Remove
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            className="m-2 ms-0 border rounded btn-light text-primary"
                                                        >
                                                            Save for later
                                                        </Button>
                                                    </div>
                                                </Card.Body>
                                            </Col>

                                            <Col xs={3} className="ms-auto me-4  d-flex flex-column align-items-end">
                                                <Card.Text className="h6">${product.price}</Card.Text>
                                                <Form.Select
                                                    className='w-auto'
                                                    value={product.quantity}
                                                    onChange={(e) => handleQuantityChange(product, Number(e.target.value) - product.quantity)} // Update quantity based on selection
                                                >
                                                    {Array.from({ length: 10 }, (_, index) => (
                                                        <option key={index + 1} value={index + 1}>
                                                            Qty: {index + 1}
                                                        </option>
                                                    ))}
                                                </Form.Select>

                                            </Col>
                                        </Row>
                                    </Card>
                                </div>


                                <Card className="d-lg-none border-0 border-bottom mb-3">
                                    <div className='pt-2' style={{ display: "flex" }}>
                                        <Card.Img
                                            src={product.image}
                                            alt="Product"
                                            style={{ height: "100px", width: "100px" }}
                                            className='border p-2 mb-2'
                                        />
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                        </Card.Body>

                                        <Button className='btn-light h-25' onClick={() => handleRemove(product)}
                                        >
                                            <HiArchiveBoxXMark style={{ width: "30px", height: "40px", color: 'red' }} />
                                        </Button>
                                    </div>
                                    <div className='d-flex'>
                                        <div className="mb-3 d-flex">
                                            <ButtonGroup aria-label="Basic example" className='rounded border' style={{ width: '150px' }}>
                                                <Button
                                                    variant="light"
                                                    className='border'
                                                    onClick={() => handleQuantityChange(product, -1)}
                                                >
                                                    -
                                                </Button>
                                                <p variant="secondary" style={{ width: '60px', textAlign: 'center', marginTop: '5px', marginBottom: 0, fontSize: '20px' }}>
                                                    {product.quantity}
                                                </p>
                                                <Button
                                                    variant="light"
                                                    className='border'
                                                    onClick={() => handleQuantityChange(product, 1)}
                                                >
                                                    +
                                                </Button>
                                            </ButtonGroup>

                                        </div>
                                        <h4 className='ms-auto'>
                                            $ {product.price}
                                        </h4>
                                    </div>
                                </Card>
                            </div>
                        ))}

                        <div className="row ps-3 pb-3 pt-3 justify-content-between d-lg-flex d-none">
                            <div className="col">
                                <NavLink to='/home' className="btn btn-primary border text-white">
                                    <FaChevronLeft /> Back to shop
                                </NavLink>
                            </div>
                            <div className="col text-end pe-4">
                                <Button className="btn btn-light border text-primary" onClick={() => dispatch(clearCart())}>
                                    Remove all
                                </Button>
                            </div>
                        </div>
                    </article>

                    <div className="icon-link d-lg-flex d-none justify-content-between pb-3">
                        <div className="icon-link d-flex">
                            <img src={Lock} alt="Payment" />
                            <div className="card-body ps-2">
                                <h5 className="mb-0">Secure payment</h5>
                                <p>Have you ever finally just...</p>
                            </div>
                        </div>
                        <div className="icon-link d-flex">
                            <img src={Car} alt="Payment" />
                            <div className="card-body ps-2">
                                <h5 className="mb-0">Secure payment</h5>
                                <p>Have you ever finally just...</p>
                            </div>
                        </div>
                        <div className="icon-link d-flex">
                            <img src={Message2} alt="Payment" />
                            <div className="card-body ps-2">
                                <h5 className="mb-0">Secure payment</h5>
                                <p>Have you ever finally just...</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 px-lg-2  p-0">
                    <div className="coupon mb-3">
                        <form className="w-100 p-4 d-lg-block d-none bg-white input-group">
                            <div className="w-100">
                                <label>Have a coupon?</label>
                                <div className="d-flex rounded border">
                                    <input type="text" className="form-control border-0" placeholder="Add coupon" />
                                    <button className="btn btn-light text-primary border">Apply</button>
                                </div>
                            </div>
                        </form>
                        <div className="check-out bg-white border bg-light rounded mt-lg-3 px-4 py-4 ">
                            <div className="cart-summary"></div>
                            <table className=" w-100">
                                <tbody>
                                    <tr>
                                        <td>Subtotal:</td>
                                        <td className="text-end">${subtotal.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Discount:</td>
                                        <td className="text-end text-danger">${discount.toFixed(2)}</td>
                                    </tr>
                                    <tr className='border-bottom'>
                                        <td>Tax:</td>
                                        <td className="text-end text-success">${tax.toFixed(2)}</td>
                                    </tr>
                                    <tr className="h4 pt-2 ">
                                        <td>Total:</td>
                                        <td className="text-end text-dark ">${total.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="row p-2">
                                <button className="btn px-2  text-light w-100" style={{ backgroundColor: '#00B517' }} type="button">
                                    Checkout
                                </button>
                            </div>
                            <div className="ps-3 d-lg-flex d-none justify-content-around">
                                {/* Payment logos */}
                                <img src={pay1} alt="Payment" />
                                <img src={pay2} alt="Payment" />
                                <img src={pay3} alt="Payment" />
                                <img src={pay4} alt="Payment" />
                                <img src={pay5} alt="Payment" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default CardItems;
