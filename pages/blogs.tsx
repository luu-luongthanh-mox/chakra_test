import { Container, Wrap, WrapItem } from "@chakra-ui/react";
import { CardBlog } from "components/CardBlog";
import { useAuth } from "Context/AuthContext";
import React, { useEffect, useState } from "react";
import { getListBlogs } from "services/blog.service";

function Blogs() {
  const [blogs, setBlogs] = useState<any[]>([]);
  useEffect(() => {
    getListBlogs({
      next: (querySnapshot) => {
        const items = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
        console.log(items);
        setBlogs(items);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }, []);
  return (
    <Container maxW="container.lg" mt="5">
      <Wrap>
        {blogs.map((item) => (
          <WrapItem blog={item}>
            <CardBlog blog={item} />
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
}

export default Blogs;
