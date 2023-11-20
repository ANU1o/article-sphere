import React, { useEffect, useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Write = ({ showStat }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  // const [Image, setImage] = useState("");
  const [contentText, setContentText] = useState("");

  const postCollectionRef = collection(db, "Blogs");

  const createBlog = async () => {
    await addDoc(postCollectionRef, {
      title,
      contentText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/Home");
  };

  showStat(true);
  return (
    <Container className="my-5">
      <div className="bg-light rounded-5 p-5">
        <FloatingLabel
          controlId="floatingInput"
          label={<span className="ms-2">Title</span>}
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="title"
            className="rounded-5 ps-4"
            onChange={(e) => setTitle(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          label={<span className="ms-2">Content</span>}
        >
          <Form.Control
            as="textarea"
            placeholder="Content"
            className="rounded-5 p-4"
            style={{ height: "100vh" }}
            onChange={(e) => setContentText(e.target.value)}
          />
        </FloatingLabel>
        <Button
          onClick={createBlog}
          variant="primary"
          size="lg"
          className="rounded-5 w-100"
        >
          Submit Article
        </Button>
      </div>
    </Container>
  );
};

export default Write;
