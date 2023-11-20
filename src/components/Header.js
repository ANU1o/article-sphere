import React from "react";
import { Navbar, Image, Container, Form, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const Header = ({ displayVal, setIsAuth }) => {
  const navigate = useNavigate();
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
  };
  return (
    <Navbar
      expand="lg"
      className={`sticky-top bg-light shadow ${displayVal}`}
      style={{
        borderBottomRightRadius: "100vh",
        borderBottomLeftRadius: "100vh",
        zIndex: "10000",
      }}
    >
      <Container className="px-5 px-lg-auto">
        <Link className="text-decoration-none" to="/Home">
          <Navbar.Brand className="me-auto pe-3">
            <i className="fa-regular fa-circle text-primary me-2"></i>
            <span className="text-uppercase d-none d-lg-inline">
              Article Sphere
            </span>
          </Navbar.Brand>
        </Link>
        <Button variant="secondary" onClick={signUserOut} className="rounded-5">
          Sign Out
        </Button>
        {/* <Form.Control
          type="text"
          className="mx-auto w-25 d-none d-lg-block rounded-5 ps-4"
          placeholder="Search"
        /> */}

        {/* <Nav variant="pills" className="ms-auto flex-row">
          <NavLink
            to="/Home"
            className={({ isActive }) =>
              isActive ? "nav-link active rounded-5" : "nav-link"
            }
          >
            <i className="fa-solid fa-home me-2 me-lg-1 ms-2 ms-lg-0"></i>
            <span className="d-none d-lg-inline">Home</span>
          </NavLink>
          <NavLink
            to="/Explore"
            className={({ isActive }) =>
              isActive ? "nav-link active rounded-5" : "nav-link"
            }
          >
            <i className="fa-solid fa-compass me-2 me-lg-1 ms-2 ms-lg-0"></i>
            <span className="d-none d-lg-inline">Explore</span>
          </NavLink>
          <NavLink
            to="/Profile"
            className={({ isActive }) =>
              isActive ? "nav-link rounded-5 active" : "nav-link"
            }
          >
            <Image
              src="/ppp.jpg"
              className="mx-2 mx-lg-0"
              roundedCircle
              style={{
                width: "1.5rem",
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
          </NavLink>
        </Nav> */}
      </Container>
    </Navbar>
  );
};

export default Header;
