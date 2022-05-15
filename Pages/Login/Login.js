import React from "react";
import './Login.css'
function Login() {
  return (
    <div>
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>login</button>
            <p class="message">
              Not registered? <a >Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
