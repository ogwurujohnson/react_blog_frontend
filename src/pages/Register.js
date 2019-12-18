import React, { useRef } from "react";
import { connect } from "react-redux";
import { StyledContainer, StyledAuth, StyledNav, StyledFooter } from "../utilities/styles/RegisterStyles";
import * as actionCreators from "../redux-store/actions/actionCReators";
import registration_jumbo from '../assets/images/registration-jumbo.png';

function Register({ register, registering }) {
  const fullname = useRef("");
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = e => {
    e.preventDefault();

    const userData = {
      username: fullname.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: password.current.value, 
    };
    if (
      userData.username &&
      userData.email &&
      userData.password 
    ) {
      register(userData);
    }
  };

  return (
    <StyledContainer>
        <StyledNav>
            <div className='nav-left'>
                Insight
            </div>
            <div className='nav-right'></div>
        </StyledNav>
        <img src={registration_jumbo} alt='Man on laptop'/>
      <StyledAuth>
        <h1>Try Insight for Free</h1>
        <p>Get started with Insight for free by creating an account with your email address</p>
        <p className="inline">
            By signing up, I agree to Insight's <a href="/"> Privacy Policy </a> and <a href='/'>Terms of Service</a>
          </p>
        <input placeholder="Full Name" ref={fullname} type="text" />
        <input placeholder="Email" ref={email} type="text" />
        <input placeholder="Password" ref={password} type="password" />
        <button onClick={handleSubmit} className="primary">
          {!registering.registering ? "Try for Free" : "Loading.."}
        </button>
        <p>
          Already have an account?
          <span>
            <a href="/">Log in Here</a>
          </span>
        </p>
      </StyledAuth>
      <StyledFooter>

      </StyledFooter>
    </StyledContainer>
  );
}
export default connect(state => state, actionCreators)(Register);
