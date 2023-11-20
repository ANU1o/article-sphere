import React, { useEffect, useState } from "react";
import { CategoryBadge, CategoryHolder } from "../components/Category";
import { Container } from "react-bootstrap";
import { BlogCard, BlogContainer } from "../components/Blog";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const Home = ({ showStat }) => {
  const postCollectionRef = collection(db, "Blogs");
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    showStat(true);
    const getBlogs = async () => {
      const data = await getDocs(postCollectionRef);
      setBlog(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBlogs();
  }, []);

  return (
    <>
      <Container className="my-5">
        {/* <CategoryHolder Add>
          <CategoryBadge categoryName="Topic" categoryValue="value" />
          <CategoryBadge categoryName="Topic 2" categoryValue="value" />
          <CategoryBadge categoryName="Third Topic" categoryValue="value" />
        </CategoryHolder> */}
        <BlogContainer>
          {blog.map((post) => (
            <BlogCard
              cardTitle={post.title}
              author={post.author.name}
              cardContent={post.contentText}
            />
          ))}
        </BlogContainer>
      </Container>
    </>
  );
};

export default Home;
