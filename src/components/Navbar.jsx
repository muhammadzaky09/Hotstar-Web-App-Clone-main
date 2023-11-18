import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import { useHistory } from "react-router-dom";
import { auth } from '../firebase.js';

const Navbar = () => {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const returnPage = () => { 
        history.push("/home"); 
    }

    const login = () => {
        history.push("/login");
    }

    const logout = () => {
        auth.signOut().then(() => {
            history.push('/home');
            window.location.reload(); 
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <Container>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <Logo src={logo} onClick={returnPage} alt="Logo" className='navbar-logo'/>
                    { !isLoggedIn ? 
                        <Button className="navbar-btn btn btn-outline-secondary" onClick={login}>Login</Button>
                    : 
                        <Button className="navbar-btn btn btn-outline-secondary" onClick={logout}>Logout</Button>
                    }
                </div>
            </nav>
        </Container>
    );
}

// Styled Components
const Container = styled.div`
    .navbar {
        // your styles
    }
`;

const Logo = styled.img`
    cursor: pointer;
`;

const Button = styled.button`
    // your styles
`;

export default Navbar;
