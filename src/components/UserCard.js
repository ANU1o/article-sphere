import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const UserCard = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
  };

  return (
    <div
      className="d-flex flex-column align-items-center sticky-top mb-3"
      style={{ top: "12vh" }}
    >
      <Image src="/ppp.jpg" roundedCircle style={{ width: "10rem" }} />
      <h2 className="text-center">Username</h2>
      <h5 className="text-center fw-normal text-muted">
        Titles and Recognitions
      </h5>
      <Row className="my-3 w-100">
        <Col lg="4" md="4" xs="4">
          <h2 className="text-center m-0">0</h2>
          <h6 className="text-center text-muted mb-0">Followers</h6>
        </Col>
        <Col lg="4" md="4" xs="4">
          <h2 className="text-center m-0">0</h2>
          <h6 className="text-center text-muted mb-0">Following</h6>
        </Col>
        <Col lg="4" md="4" xs="4">
          <h2 className="text-center m-0">0</h2>
          <h6 className="text-center text-muted mb-0">Blog</h6>
        </Col>
      </Row>
      <div className="bg-light rounded-5 p-4 my-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod earum
          laborum rerum, velit, inventore maiores, vel asperiores sapiente error
          quaerat veritatis alias. Voluptate explicabo, excepturi distinctio
          cupiditate aliquid sed nostrum.
        </p>
        <div className="d-flex flex-column gap-3">
          <Link to="" className="text-decoration-none fst-italic">
            <i className="fa-solid fa-envelope me-2"></i>example@mail.com
          </Link>
          <Link to="" className="text-decoration-none fst-italic">
            <i className="fa-brands fa-instagram me-2"></i>@example
          </Link>
          <Link to="" className="text-decoration-none fst-italic">
            <i className="fa-brands fa-linkedin me-2"></i>/example
          </Link>
          <Link to="" className="text-decoration-none fst-italic">
            <i className="fa-brands fa-x-twitter me-2"></i>@example
          </Link>
        </div>
      </div>
      <Button
        variant="secondary"
        onClick={signUserOut}
        size="lg"
        className="rounded-5 w-100"
      >
        Sign Out
      </Button>
    </div>
  );
};

export default UserCard;
