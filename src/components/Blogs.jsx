import React, { useContext } from "react";
import { AppContext } from "../context/context";
import Spinner from "./spinner";
import Card from "./Cards";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center justify-center w-[50vw] h-auto  bg-gray-200 pt-[40px] pb-[50px] ">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => <Card key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Blogs;
