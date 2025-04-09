import React from "react";

function Cards({ post }) {
  return (
    <div className="flex flex-col items-center justify-center h-auto w-[50vw] bg-gray-200  rounded-lg shadow-md mt-[10px] mb-[10px] p-[20px]">
      <p className=" text-yellow-800 font-bold">{post.title}</p>
      <p>
        By <span>{post.author}</span> On{" "}
        <span className=" font-bold underline">{post.category}</span>
      </p>
      <p>Posted On {post.date}</p>
      <p>{post.content}</p>
      <div className="flex gap-[10px] mt-[10px]">
        {post.tags.map((tag, index) => {
          return (
            <span
              className=" text-blue-800 underline "
              key={index}
            >{`#${tag}`}</span>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
