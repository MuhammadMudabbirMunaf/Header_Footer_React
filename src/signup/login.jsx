import React from "react";
import "../signup/login.css";

function Login() {
    return (
        <div className="container2">
            <div className="wrapper2">
                <p className="signupHead2">
                    Login
                </p>
                <p className="text2">Enter Your Name : </p>
                <input type="text" name="username" placeholder="Username" /><br />
                <p className="text2">Enter Your Email : </p>
                <input type="email" name="email" placeholder="Email" /><br />
                <p className="text2">Enter Your Password : </p>
                <input type="password" name="password" placeholder="Password" /><br />
                <p className="text2">Confirm Your Password : </p>
                <input type="password" name="confirmpassword" placeholder="Confirm Password" />
            </div>
        </div>
    )
}

export default Login;