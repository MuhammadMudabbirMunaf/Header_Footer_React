import React from "react";
import "../signup/signup.css";

function Signup() {
    return (
        <div className="container3">
            <div className="wrapper">
                <p className="signupHead">
                    Sign Up
                </p>
                <p className="text">Enter Your Name : </p>
                <input type="text" name="username" placeholder="Username" /><br />
                <p className="text">Enter Your Email : </p>
                <input type="email" name="email" placeholder="Email" /><br />
                <p className="text">Enter Your Password : </p>
                <input type="password" name="password" placeholder="Password" /><br />
                <p className="text">Confirm Your Password : </p>
                <input type="password" name="confirmpassword" placeholder="Confirm Password" />
                <p className="text">Enter Your Address : </p>
                <input type="text" name="address" placeholder="Address" /><br />
                <p className="text">Enter Your Date Of Birth : </p>
                <input type="date" name="dob"/>
                <p className="text">Confirm Your Phone Number : </p>
                <input type="number" name="number" placeholder="Phone Number" />
                <p className="text">Enter Your Postal Code : </p>
                <input type="number" name="postalcode" placeholder="Postal Code" /><br />
            </div>
        </div>
    )
}

export default Signup;