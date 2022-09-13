import { useState } from "react";

const LoginForm = ({handlers}) => {
  const { loginSubmit } = handlers;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 border p-3">
          <div className="form-group mb-2">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="EmailInput"
              name="EmailInput"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <small id="emailHelp" className="text-danger form-text">
              {emailError}
            </small>
          </div>
          <div className="form-group mb-2">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <small id="passworderror" className="text-danger form-text">
              {passwordError}
            </small>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-2"
            onClick={() => loginSubmit(email, password)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
