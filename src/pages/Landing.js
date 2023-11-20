import React, { useEffect } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

const Landing = ({ showStat, Register, setIsAuth }) => {
  const isRegisterForm = Register ? true : false;
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      try {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/Home");
      } catch (err) {
        console.error(err);
      }
    });
  };

  useEffect(() => {
    showStat(false);
  }, []);

  return (
    <div className="min-vh-100 py-5 py-lg-0 bg-landing d-flex flex-column flex-lg-row gap-5 justify-content-start justify-content-lg-around align-items-center">
      <div>
        <h1 className="text-center">
          <i className="fa-regular fa-circle text-primary fa-3x mb-3"></i>
          <br />
          <span className="text-uppercase text-light">Article Sphere</span>
        </h1>
        <h5 className="text-center text-light fw-light text-capitalize">
          A place to share your thoughts
        </h5>
      </div>
      <div
        className="bg-secondary bg-opacity-75 p-5 d-flex flex-column rounded-5 mb-5 mb-lg-0 loginWidth"
        data-bs-theme="dark"
      >
        {/* <h1 className="text-center text-light mb-5">
          {isRegisterForm ? "Register" : "Login"}
        </h1>
        <FloatingLabel
          label={<span className="ms-2 text-light">Email Address</span>}
          className="mb-3"
        >
          <Form.Control
            type="text"
            className="rounded-5 ps-4"
            placeholder="Email Address"
          />
        </FloatingLabel>
        {isRegisterForm && (
          <FloatingLabel
            label={<span className="ms-2 text-light">Full Name</span>}
            className="mb-3"
          >
            <Form.Control
              type="text"
              className="rounded-5 ps-4"
              placeholder="Full Name"
            />
          </FloatingLabel>
        )}
        <FloatingLabel
          label={
            <span className="ms-2 text-light">
              {isRegisterForm ? "New Password" : "Password"}
            </span>
          }
          className="mb-3 "
        >
          <Form.Control
            type="password"
            className="rounded-5 ps-4"
            placeholder="Password"
          />
        </FloatingLabel> */}
        {/* {isRegisterForm ? (
          <Button variant="primary" className="rounded-5 w-100" size="lg">
            Sign Up
          </Button>
        ) : (
          <Button variant="primary" className="rounded-5 w-100" size="lg">
            Sign In
          </Button>
        )} */}
        {/* <p className="my-3 text-center fw-bold text-muted">OR</p> */}
        <Button
          variant="light"
          className="rounded-5 w-100"
          onClick={signInWithGoogle}
          size="lg"
        >
          <i className="fa-brands fa-google me-2"></i>
          Sign in with Google
        </Button>
        {/* <hr />
        <p className="text-center text-light">
          {isRegisterForm ? "Already in " : "New to "}
          <span className="text-uppercase fw-bold">Article Sphere</span>?
          <br />
          {isRegisterForm ? (
            <Link
              className="text-decoration-none text-capitalize text-primary fw-bold"
              to="/"
            >
              Head to login page
            </Link>
          ) : (
            <Link
              className="text-decoration-none text-capitalize text-primary fw-bold"
              to="/Register"
            >
              Join our reader community
            </Link>
          )}
        </p> */}
      </div>
    </div>
  );
};

export default Landing;
