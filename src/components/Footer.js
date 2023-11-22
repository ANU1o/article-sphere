import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = ({ displayVal }) => {
  return (
    <footer className={`bg-secondary p-5 mt-auto ${displayVal}`}>
      <Row className="align-items-center mx-3">
        <Col lg xs="12">
          <Link
            to="/Home"
            className="text-center d-block text-decoration-none text-light h3"
          >
            <i className="fa-regular fa-circle text-primary fa-custom mb-3 mb-lg-0 me-2"></i>
            <br className="d-block d-lg-none" />
            <span className="text-uppercase">Article Sphere</span>
          </Link>
        </Col>
        <hr className="border-primary opacity-50 border-3 my-3 d-block d-lg-none" />
        <Col lg xs="12">
          <h1 className="text-primary">Pages</h1>
          <Link to="/Home" className="nav-link">
            Home
          </Link>
          <Link to="/Write" className="nav-link">
            Write
          </Link>
        </Col>
        <hr className="border-primary opacity-50 border-3 my-3 d-block d-lg-none" />
        <Col lg xs="12">
          <h1 className="text-primary">Libraries</h1>
          <Link to="https://reactrouter.com/en/main" className="nav-link">
            react-router-dom
          </Link>
          <Link to="https://react-bootstrap.netlify.app" className="nav-link">
            react-bootstrap
          </Link>
          <Link to="https://firebase.google.com" className="nav-link">
            Firebase
          </Link>
        </Col>
        <hr className="border-primary opacity-50 border-3 my-3 d-block d-lg-none" />
        <Col className="d-flex flex-row justify-content-center">
          <Link to="https://github.com/ANU1o" className="nav-link fs-3">
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/anoof-abdul-kadar-883433147/"
            className="nav-link fs-3"
          >
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link to="https://www.behance.net/anu1o" className="nav-link fs-3">
            <i className="fa-brands fa-behance"></i>
          </Link>
          <Link
            to="https://www.instagram.com/anu_1o_/"
            className="nav-link fs-3"
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
