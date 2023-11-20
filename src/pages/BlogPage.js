import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import { CategoryBadge, CategoryHolder } from "../components/Category";
import { useParams } from "react-router-dom";

const BlogPage = ({ showStat }) => {
  const param = useParams();

  const { id } = param;

  showStat(true);
  return (
    <Container className="my-5">
      <div className="mb-5">
        <h1 className="text-center display-1 text-capitalize fw-bolder mb-4">
          {id?.title}
        </h1>
        {/* <h6 className="text-center text-muted fw-normal">
          November 17, 2023 at 12:00:00AM UTC+3
        </h6>
        <CategoryHolder>
          <CategoryBadge categoryName="Topic" categoryValue="value" />
        </CategoryHolder> */}
      </div>
      <div className="bg-light rounded-5 p-5 fs-5 mb-5">
        <p>{id?.contentText}</p>
      </div>
      {/* <div className="rounded-5 bg-light p-5 d-flex flex-column flex-lg-row align-items-center gap-4">
        <Image
          src="/ppp.jpg"
          className="ms-1"
          roundedCircle
          style={{
            width: "6rem",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
        />

        <div className="text-center text-lg-start">
          <h2 className="mb-0">Author Name</h2>
          <h5 className="text-muted fst-italic fw-normal">User Bio</h5>
          <div className="d-flex flex-row gap-3 justify-content-center justify-content-lg-start">
            <h5 className="text-muted">
              <i className="fa-solid fa-heart me-2"></i>0
            </h5>
            <h5 className="text-muted">
              <i className="fa-solid fa-eye me-2"></i>0
            </h5>
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          className="rounded-5 ms-0 ms-lg-auto"
        >
          <i className="fa-solid fa-user-plus me-1"></i>Follow
        </Button>
      </div> */}
    </Container>
  );
};

export default BlogPage;
