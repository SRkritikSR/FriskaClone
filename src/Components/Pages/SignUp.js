import { React, useState } from 'react'
import { firebase, auth, provider } from '../../firebase';
import { Link } from 'react-router-dom'
// styles
import '../../assets/styles/Common.css'
import '../../assets/styles/SignUpForm.css'

// images
import siteLogo from '../../assets/img/companyName.png'
import googleLogo from '../../assets/img/Login Form/Google Icon.png'


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
    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage(); 
    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');
    // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    //     'size': 'invisible',
    //     'callback': (response) => {
    //       // reCAPTCHA solved, allow signInWithPhoneNumber.
    //       onSignInSubmit();
    //     }
    //   });
    // Sent OTP
    const signin = () => {
        if (mynumber === "" || mynumber.length < 10) return;
        let countryCode="+91"
        const verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(countryCode+mynumber, verify).then((result) => {   
            setfinal(result);
            setshow(true);
        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
    }

    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            // success
        }).catch((err) => {
            alert("Wrong code");
        })
    }


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
                        <div style={{ display: show ? "none" : "block" }}>
                            <label htmlFor="phoneNumber">

                                Phone Number : <br /><br />
                                <input value={mynumber} onChange={(e) => {
                                    setnumber(e.target.value)
                                }} type="text" placeholder='10 digit Mobile Number' id="phoneNumberSign" />
                            </label>
                            
                            <div className='space-top-down' id="recaptcha-container"></div>
                            <br />
                            <div className="buttonSendSignUp">
                                <button onClick={signin} id="sign-in-button" className="sendBtnSignUp">Send OTP</button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="OTPEntry" style={{ display: show ? "block" : "none" }}>
                        <p className="otpHeading">Enter OTP</p>
                        <br />
                        <div className="OTPInputs">
                            <input onChange={(e) => { setotp(e.target.value) }} type="text" name="" id="" className='inputOTP' />
                        </div>
                        <button onClick={ValidateOtp} className="SignUpBtn ">Sign Up</button>
                    </div>


                    <br />

                    <button className="SignUpGoogleBtn space-top-down" onClick={gsign}><img src={googleLogo} alt="google" className="googleLogo" /> Sign in with Google</button>
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