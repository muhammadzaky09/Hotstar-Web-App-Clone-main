import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import firstlogo from '../images/cta-logo-one.svg';
import secondlogo from '../images/cta-logo-two.png';
import bg from '../images/login-background.png';

const Login = () => {
    return (
        <Container>
            <div className="login-body">
                <ContentWrapper>
                    <img src={firstlogo} alt="" className="firstlogo"/>
                    <h1 className='text-center text-white'>Stream brand new Originals, blockbusters, binge-worthy series and more</h1>
                    <NavLink className="login-btn btn btn-primary" to='/home'><h4>Explore</h4></NavLink>
                    <p className="login-dis text-white text-center" style={{fontSize: 10}}>*Offer ends 31/10/23. Valid for 18+ consumers without a Disney+ subscription. Get 12 months of Disney+ for less than the cost of 8 months of a monthly Disney+ Premium plan from 01/11/23. Auto renews at the then annual Premium price (currently £109.90) until cancelled or another subscription plan is selected.
                    **Effective at the end of the billing period. Subscription required.</p>
                    <img src={secondlogo} alt="" className="secondlogo"/>
                </ContentWrapper>
            </div>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh; // occupy full viewport height
  overflow-y: auto; // make it scrollable
`;

const ContentWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: rgba(0.5, 0.5, 0.5, 0.5);
  border-radius: 10px;
`;

export default Login;
