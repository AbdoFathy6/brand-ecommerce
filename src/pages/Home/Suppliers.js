import React, { useState } from 'react';
import { Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import '../../assets/css/main.css';
const Suppliers = () => {
    const [formData, setFormData] = useState({
        item: '',
        message: '',
        quantity: '',
        unit: 'Pcs',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (value.length <= 150) { // Assuming 150 is your maxLength
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleUnitChange = (unit) => {
        setFormData(prevState => ({
            ...prevState,
            unit,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.item || !formData.message || !formData.quantity) {
            setError('Please fill in all fields');
        } else {
            setError('');
            console.log(formData);
        }
    };

    return (
        <div className="card d-flex background mb-3">
            <div className="d-flex">
                <InquiryCardLeft />
                <InquiryCardRight
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    error={error}
                    handleUnitChange={handleUnitChange}
                />
            </div>
        </div>
    );
};

const InquiryCardLeft = () => (
    <div >
        <div className="card-body w-75">
            <h2 className="card-title text-light w-100">An easy way to send requests to all suppliers</h2>
            <p className="card-text text-light  d-lg-block d-none">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
            </p>
            <Button className="login-button d-lg-none " id="login-button">
                Send inquiry
            </Button>
        </div>
    </div>
);

const InquiryCardRight = ({ formData, handleChange, handleSubmit, error, handleUnitChange }) => (
    <div className="col-lg-6 d-none d-lg-block mb-lg-5">
        <Form className="form pt-3" id="myForm" onSubmit={handleSubmit}>
            <div className="login-container mx-5 mt-3 mb-2">
                <div className="login-header mb-3">
                    <h3 className="text-black">Send quote to suppliers</h3>
                </div>
                <Form.Group controlId="item" className="mb-2">
                    <Form.Control
                        type="text"
                        name="item" // تأكد من إضافة الاسم
                        placeholder="What item you need?"
                        className="login-input"
                        value={formData.item}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="message" className="mb-2">
                    <Form.Control
                        as="textarea"
                        name="message" // تأكد من إضافة الاسم
                        placeholder="Type more details"
                        className="login-input"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ resize: 'none' }} // Optional: prevents resizing
                    />
                    <Form.Text className="text-muted">
                        {formData.message.length} / 150 characters
                    </Form.Text>
                </Form.Group>
                <div className="d-flex align-items-center mb-2">
                    <Form.Control
                        type="text"
                        name="quantity" // تأكد من إضافة الاسم
                        placeholder="Quantity"
                        className="input"
                        id="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                    />
                    <DropdownButton
                        title={formData.unit}
                        variant="white"
                        className="ms-1 rounded border h-100 w-auto"
                    >
                        <Dropdown.Item onClick={() => handleUnitChange('Pcs')} className='h-100 border-0 w-100'>Pcs</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleUnitChange('Boxes')} className='h-100'>Boxes</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleUnitChange('Kg')} className='h-100'>Kg</Dropdown.Item>
                    </DropdownButton>
                </div>
                <Button className="login-button mt-0" id="login-button" type="submit">
                    Send inquiry
                </Button>
            </div>
            {error && <p id="error-msg" className="text-danger mt-2">{error}</p>}
        </Form>
    </div>
);


export default Suppliers
