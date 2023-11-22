import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";

const BlogContainer = ({ children }) => {
  return <div className="d-flex flex-column">{children}</div>;
};

const BlogCard = ({ cardTitle, cardContent, author }) => {
  const readToggle = () => {
    var dots = document.getElementById(`${cardTitle.slice(0, 3)}dots`);
    var moreText = document.getElementById(`${cardTitle.slice(0, 3)}more`);
    var btnText = document.getElementById(`${cardTitle.slice(0, 3)}myBtn`);

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  };

  useEffect(() => {
    const dot = document.getElementById(`${cardTitle.slice(0, 3)}dots`);
    var moreText = document.getElementById(`${cardTitle.slice(0, 3)}more`);
    dot.style.display = "inline";
    moreText.style.display = "none";
  }, []);

  return (
    <div className="bg-light d-flex flex-column flex-lg-row rounded-5 shadow-sm mb-3">
      <div className="p-3 p-lg-5 ">
        <h3 className="text-capitalize">{cardTitle}</h3>
        <div className="d-flex flex-row gap-2 mb-3 align-items-center">
          {/* <Image
            src="/ppp.jpg"
            roundedCircle
            style={{
              width: "1.5rem",
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
          /> */}
          <h6 className="fst-italic text-muted mb-0">{author}</h6>
        </div>
        <p>
          {cardContent.slice(0, 450)}
          <span id={`${cardTitle.slice(0, 3)}dots`}>...</span>
          <span id={`${cardTitle.slice(0, 3)}more`}>
            {cardContent.slice(450)}
          </span>
        </p>
        {cardContent.length >= 450 && (
          <>
            {/*...{" "}
             <Link className="contentContinum" to={`/Page/${blogData}`}>
                Read More
              </Link> */}
            <Button
              variant="primary"
              id={`${cardTitle.slice(0, 3)}myBtn`}
              onClick={readToggle}
              className="rounded-5"
            >
              Read More
            </Button>
          </>
        )}
      </div>
      {/* <div className="d-flex flex-row flex-lg-column p-3 justify-content-between ms-auto">
        <Button variant="light" className="btn-lg rounded-5 px-3">
          <i className="fa-solid fa-bookmark"></i>
        </Button>
        <Button variant="light" className="btn-lg rounded-5 px-3">
          <i className="fa-solid fa-share-nodes"></i>
        </Button>
        <Button variant="light" className="btn-lg rounded-5">
          <Image
            src="/ppp.jpg"
            className="ms-1"
            roundedCircle
            style={{
              width: "1.5rem",
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
          />
        </Button>
      </div> */}
    </div>
  );
};

export { BlogContainer, BlogCard };
