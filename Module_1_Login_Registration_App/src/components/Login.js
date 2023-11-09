import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
      <center>
    <div className="login">
        <h2>Login</h2>
        <form >
          <label>
            Username:
            <input type="text" required/>
          </label>
          <br />
          <label>
            Password:
            <input type="password" required/>
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/registration" className="link">Register here</Link>.
        </p>
    </div>
      </center>
  );
}
