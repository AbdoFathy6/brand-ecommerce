import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import '../../assets/css/Form.css';
import Button from 'react-bootstrap/Button';

const AuthPage = ({ onSignIn, setUserName }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
        setError(''); // Clear error on toggle
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (isSignUp) {
            if (!name) {
                setError('Name is required.');
                return;
            }
            if (password.length < 6) {
                setError('Password must be at least 6 characters long.');
                return;
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const userData = { email, name, password: hashedPassword };
            localStorage.setItem('user', JSON.stringify(userData));
            setEmail('');
            setName('');
            setPassword('');
            onSignIn(name); // Update the user's name
            navigate('/home');
        } else {
            // Handle Sign In Logic
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.email === email && await bcrypt.compare(password, storedUser.password)) {
                localStorage.setItem('isAuthenticated', true);
                setEmail('');
                setPassword('');
                setUserName(storedUser.name); // Update the user's name
                onSignIn(storedUser.name);
                navigate('/home');
            } else {
                setError('Invalid credentials! Please sign up.');
            }
        }
    };

    return (
        <div className="m-auto border rounded main bg-white p-5 shadow" >
            <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                {isSignUp && (
                    <div className='mb-3'>
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                )}
                <div className='mb-3'>
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Button variant="primary" type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</Button>{' '}
            </form>
            <Button variant="link" className='text-decoration-none' onClick={toggleSignUp}>
                {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
            </Button>
        </div>
    );
};

export default AuthPage;
