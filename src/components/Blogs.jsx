import React, { useContext } from "react";
import { AppContext } from "../context/context";
import Spinner from "./spinner";
import Cards from "./Cards";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center justify-center w-[100%] h-auto bg-gray-200 relative overflow-hidden mt-[40px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => <Cards key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Blogs;
