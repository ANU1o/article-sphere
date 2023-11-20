import React from "react";
import { Badge, Button, OverlayTrigger, Popover } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CategoryBadge = ({ categoryName, categoryValue }) => {
  return (
    <Badge className="fs-6 rounded-5 p-3 bg-secondary-toggle">
      {categoryName}
    </Badge>
  );
};

const CategoryHolder = ({ children, Add }) => (
  <>
    <div
      className={`d-flex flex-row gap-3 mb-5 ${
        Add
          ? "overflow-x-scroll scrollLayout"
          : "justify-content-center mt-5 flex-wrap"
      }`}
    >
      {Add && <CategoryAddButton />}
      {children}
    </div>
    {/* <p className="text-center d-block d-lg-none fst-italic text-muted mt-3">
      Swipe to see more<i className="fa-solid fa-angles-right fa-beat-fade ms-1"></i>
    </p> */}
  </>
);

const CategoryAddButton = () => {
  const navigate = useNavigate();
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Popover id="Popover-add" data-bs-theme="dark">
          <Popover.Header className="text-light fw-bold">
            Explore More Topics
          </Popover.Header>
          <Popover.Body className="bg-secondary text-light rounded-bottom-3">
            Discover more things happening around the world in new perspective.
          </Popover.Body>
        </Popover>
      }
    >
      <Button
        variant="light"
        className="rounded-5 px-3"
        onClick={() => navigate("/Explore")}
      >
        <i className="fa-solid fa-plus"></i>
      </Button>
    </OverlayTrigger>
  );
};

export { CategoryBadge, CategoryHolder, CategoryAddButton };
