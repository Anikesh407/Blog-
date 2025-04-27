import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/context";
import { baseUrl } from "../baseUrl";
import Header from "./Header";
import Spinner from "./spinner";
import Cards from "./Cards";

const BlogsPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${baseUrl}?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("error aa gya in blog id wali call");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="h-full w-full min-h-[100vh] ">
      <Header />
      <div>
        <button onClick={navigation(-1)}>Back</button>
      </div>
      {loading ? (
        <Spinner />
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />
          <h2>Related Blogs</h2>
          <div>
            {relatedBlogs.map((post) => {
              <Cards key={post.id} post={post} />;
            })}
          </div>
        </div>
      ) : (
        <p>No Blog Found</p>
      )}
    </div>
  );
};

export default BlogsPage;
