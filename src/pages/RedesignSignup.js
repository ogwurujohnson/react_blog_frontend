import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { 
    StyledAuthWrapper, 
    LeftSection, 
    RightSection, 
    RightSectionLogo,
    RightSectionForm 
} from '../utilities/styles/StyledAuth';
import FormLogo from '../assets/Form-Logo.svg';
import bgImg from '../assets/signup.png';
import FormTitleImg from '../assets/grid-like-img.png';
import Button from '../components/Buttons/Button'
export default function Register({ register, loading, success, location, history }) {
  
  return (
    <StyledAuthWrapper>
        <LeftSection>
            <img src={bgImg} />
        </LeftSection>
      <RightSection>
        <RightSectionLogo>
            <img src={FormLogo} alt="logo" />
        </RightSectionLogo>
        <RightSectionForm>
            <div className="title-as-an-img">
                <img src={FormTitleImg} alt="a grid like image that acts as some sort of title of the form" />
            </div>
            <div className="form-input-wrapper">
                <div className="form-group">
                    <input placeholder="Fullname" />
                </div>
                <div className="form-group">
                    <input placeholder="Email Address" />
                </div>
                <div className="form-group">
                    <input placeholder="Password" />
                </div>
            </div>
            <Button label="Sign up" className="float-right-btn" />
        </RightSectionForm>
      </RightSection>
          
    </StyledAuthWrapper>
  );
}

// const mapStateToProps = store => {
//   return {
//     loading: store.auth.loading,
//     success: store.auth.register_success
//   };
// };
// export default connect(mapStateToProps, { register })(Register);
