import React from "react";
import { NavLink } from "react-router-dom";

function Cards({ post }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] w-[40vw] bg-gray-200  rounded-lg shadow-md mt-[10px] mb-[10px] p-[20px]">
      <NavLink
        to={`/blog/${post.id}`}
        className=" text-yellow-800 font-bold cursor-pointer"
      >
        {post.title}
      </NavLink>
      <p>
        By <span>{post.author}</span> On
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className=" font-bold underline cursor-pointer">
            {post.category}
          </span>
        </NavLink>
      </p>
      <p>Posted On {post.date}</p>
      <p>{post.content}</p>
      <div className="flex gap-[10px] mt-[10px] flex-wrap">
        {post.tags.map((tag, index) => {
          return (
            <NavLink
              to={`/tags/${tag.replaceAll(" ", "-")}`}
              className=" text-blue-800 underline cursor-pointer "
              key={index}
            >{`#${tag}`}</NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
