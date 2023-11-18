import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import bg from '../images/login-background.png';
import { Card, Form, Button } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

   const login = async (e) => {
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log(auth.currentUser);
        history.push("/home");
    } catch (error) {
        alert(error);
        console.log(error.message);
    }
   }

   const emailHandler = (e) => {
    setEmail(e.target.value);
   }

   const passwordHandler = (e) => {
    setPassword(e.target.value);
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
            <h1 style={style.title}>Login</h1>
            <form  className="loginForm">
                <div className="form-group">
                    <label htmlFor="email" style={style.text}>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
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
                        value={password}
                        onChange={passwordHandler}
                        required
                        style={style.loginForm}
                        placeholder="Enter Password..."  
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={style.submitBtn} onClick={login}>
                    Login
                </button>
            </form>
            <p style={style.text}>
                Don't have an account? <Link to="/register">Register here</Link>
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



export default Login;

// Custom CSS
// Add this to your CSS file or style tag

