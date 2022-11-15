import { React, useState } from 'react'
import { firebase, auth, provider } from '../../firebase';
// styles
import '../../assets/styles/Common.css'
import '../../assets/styles/LoginForm.css'
import { Link } from 'react-router-dom'
// images
import siteLogo from '../../assets/img/companyName.png'
import googleLogo from '../../assets/img/Login Form/Google Icon.png'

function Login() {
    // const [mynumber, setnumber] = useState("");
    // const [otp, setotp] = useState('');
    // const [show, setshow] = useState(false);
    // const [final, setfinal] = useState('');

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
        auth.signInWithPopup(provider).catch(alert);
    }

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            window.location = '/'; //After successful login, user will be redirected to home.html
        }
    });

 

    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');




    const signin = () => {

        
        if (mynumber === "" || mynumber.length < 10) return;

        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
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
            alert("Wrong OTP");
        })
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
        <div className='LoginformOuterContainer'>
            <div className="LoginFormContainer">
                <img src={siteLogo} alt="" className="companyLogo" />
                <div className="LoginInnerContainer">
                    <div className="LoginForm">
                        <div style={{ display: !show ? "block" : "none" }}>
                            <label htmlFor="phoneNumber">
                                Phone Number : <br /><br />
                                <input value={mynumber} onChange={(e) => {
                                    setnumber(e.target.value)
                                }} type="text" placeholder='10 digit Mobile Number' id="phoneNumberLogin" />
                            </label>
                            <div className="buttonSend">
                                <button onClick={signin} className="sendBtn">Send OTP</button>
                            </div>
                            <div className='space-top-down' id="recaptcha-container"></div>
                            
                        </div>
                    </div>

                    <div className="OTPEntry" style={{ display: show ? "block" : "none" }}>
                        <p className="otpHeading" >Enter OTP</p>
                        <div className="OTPInputs">

                            <input onChange={(e) => { setotp(e.target.value) }} type="text" name="" id="" className='inputOTP' />
                        </div>
                    </div>



                    <button onClick={ValidateOtp} className="LoginBtn">Login</button>
                    <br />
                    <h4 className="googleaccount">Don't have an account? <Link to="/SignUp">Sign Up</Link></h4>
                    <br />

                    <p className='Or'>Or</p>
                    <br />
                    <button className="LoginGoogleBtn" onClick={gsign}> <img src={googleLogo} alt="google" className='googleLogo' />  Sign in with Google</button>

                </div>
            </div>
        </div >
    )
}

export default Login