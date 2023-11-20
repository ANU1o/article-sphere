import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserCard from "../components/UserCard";
import { BlogCard, BlogContainer } from "../components/Blog";

const Profile = ({ showStat, setIsAuth }) => {
  
  showStat(true);
  return (
    <Container className="my-5">
      <Row>
        <Col lg="3" xs="12">
          <UserCard setIsAuth={setIsAuth} />
        </Col>
        <Col>
          <BlogContainer>
            <BlogCard
              cardTitle="Heading"
              author="Author Name"
              cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque harum
          dolorem quas et non laudantium alias velit laborum at,"
            />
          </BlogContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
