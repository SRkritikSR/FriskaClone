import React from 'react'
import { firebase, auth, provider } from '../../firebase';

// styles
import '../../assets/styles/Common.css'
import '../../assets/styles/SignUpForm.css'

// images
import siteLogo from '../../assets/img/companyName.png'
import googleLogo from '../../assets/img/Login Form/Google Icon.png'

import { Link } from 'react-router-dom'
function SignUp() {
    // const [mynumber, setnumber] = useState("");
    // const [otp, setotp] = useState('');
    // const [show, setshow] = useState(false);
    // const [final, setfinal] = useState('');
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            window.location = '/'; //After successful login, user will be redirected to home.html
        }
    });
    // // Sent OTP
    // const signin = () => {


    //     if (mynumber === "" || mynumber.length < 10) return;

    //     let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    //     auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
    //         setfinal(result);
    //         alert("code sent")
    //         setshow(true);
    //     })
    //         .catch((err) => {
    //             alert(err);
    //             window.location.reload()
    //         });
    // }

    const gsign = () => {
        console.log("button clicked")
        auth.signInWithPopup(provider).catch(alert);
    }

    // Validate OTP
    // const ValidateOtp = () => {
    //     if (otp === null || final === null)
    //         return;
    //     final.confirm(otp).then((result) => {
    //         // success
    //     }).catch((err) => {
    //         alert("Wrong code");
    //     })
    // }
    const logout = () => {
        auth.signOut();
    }

    return (
        <div className='SignUpOuterContainer'>
            <div className="SignFormContainer">
                <img src={siteLogo} alt="" className="companyLogo" />
                <div className="SignUpInnerContainer">

                    <div className="SignUpForm">
                        <label htmlFor="">
                            Your Name :  <br /><br />
                            <input type="text" placeholder='Your Name' id="nameInputSign" />
                        </label>
                        <label htmlFor="phoneNumber">
                            Phone Number : <br /><br />
                            <input type="text" placeholder='10 digit Mobile Number' id="phoneNumberSign" />
                        </label>
                        <div className="buttonSendSignUp">
                            <button className="sendBtnSignUp">Send OTP</button>
                        </div>
                    </div>
                    <br />
                    <div className="OTPEntry">
                        <p className="otpHeading">Enter OTP</p>
                        <br />
                        <div className="OTPInputs">
                            <input type="text" name="" id="" className='inputOTP' />
                        </div>
                    </div>
                    <button className="SignUpBtn">Sign Up</button>

                    <br />

                    <button className="SignUpGoogleBtn" onClick={gsign} > <img src={googleLogo} alt="google" className="googleLogo" /> Sign in with Google</button>
                    <br />
                    <h4 className="googleaccount">Already have an account? <Link to="/Login">Login</Link></h4>
                    {/* <button style={{ "marginLeft": "20px" }}
                        onClick={logout}>
                        Logout
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default SignUp