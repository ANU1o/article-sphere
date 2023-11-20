import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WriteButton = ({ displayVal }) => {
  const navigate = useNavigate();
  return (
    <div className={`fixed-bottom m-3 justify-content-end ${displayVal}`}>
      <OverlayTrigger
        trigger="hover"
        placement="left"
        overlay={<Tooltip>Inspired? Write a new Article</Tooltip>}
      >
        <Button
          variant="primary"
          className="rounded-5"
          onClick={() => navigate("/Write")}
          size="lg"
        >
          <i className="fa-solid fa-feather"></i>
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default WriteButton;
