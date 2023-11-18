import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import bg from '../images/login-background.png';
import { Card, Form, Button } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase.js';

const Registration = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
   

   const register = async (e) => {
    e.preventDefault();
    if (registerPassword !== confirmPassword) {
        setError('Passwords do not match');
        return;
    }
    try {
        await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        history.push("/home");
    } catch (error) {
        alert(error);
        console.log(error.message);
    }

   }

   const emailHandler = (e) => {
    setRegisterEmail(e.target.value);
   }

   const passwordHandler = (e) => {
    setRegisterPassword(e.target.value);
   }

   const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
   }


    return (
        // <Card>
        //     <Card.Body>
        //         <h1 style={style.title}>Login</h1>
        //         <Form>
        //             <Form.Group id="email">
        //                 <Form.Label>Email</Form.Label>
        //                 <Form.Control type="email" ref={emailRef} required/>
        //             </Form.Group>

        //         </Form>
        //     </Card.Body>
        // </Card>
        <div style={style.outerContainer}>
        <div className="container" style={style.innerContainer}>
            <h1 style={style.title}>Register</h1>
            <form className="loginForm">
                <div className="form-group">
                    <label htmlFor="email" style={style.text}>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={registerEmail}
                        onChange={emailHandler}
                        required
                        style={style.loginForm}
                        placeholder="Enter email..."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" style={style.text}>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={registerPassword}
                        onChange={passwordHandler}
                        required
                        style={style.loginForm}
                        placeholder="Enter Password..."  
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword" style={style.text}>Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={confirmPasswordHandler}
                        required
                        style={style.loginForm}
                        placeholder="Confirm Password..."  
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className="btn btn-primary" style={style.submitBtn} onClick={register}>
                    Register
                </button>
            </form>
            <p style={style.text}>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
        </div>
    );
};

const style = {
    outerContainer: {
        backgroundImage: `url(${bg})`,
        height: '90.5vh',
        display: 'flex',
        alignItems: 'center',
    },
    innerContainer: {
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(0.5, 0.5, 0.5, 0.5)',
        width: '40%',
        borderRadius: '10px',
        padding: '20px',
       
    },
    loginForm: {
        width: '100%',
        maxWidth: '330px',
        padding: '8px',
        marginBottom: '8px',
    },
    indivForm: {
        
    },
    title: {
        color: 'white',
    },
    text: {
        color: 'white',
    },
    submitBtn: {
        width: '100%',
        maxWidth: '330px',
        marginTop: '12px',
        marginBottom: '12px',
    },

    
};



export default Registration;

// Custom CSS
// Add this to your CSS file or style tag

