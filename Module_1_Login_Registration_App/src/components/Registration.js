import React from "react";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
      <center>
            <div className="registration">
      <h2>Registration</h2>
      <form >
        <label>
          User Name:
          <input type="text" required/>
        </label>
        <br />
        <label>
          Email:
          <input type="email" required/>
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" required/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" required/>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/" className="link">Login here</Link>.
      </p>
    </div>
      </center>
  );
}
