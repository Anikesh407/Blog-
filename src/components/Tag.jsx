import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Pagination from "./Pagination";
import Blogs from "./Blogs";

function Tag() {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
  return (
    <div className="w-full min-h-[100vh] h-full flex flex-col items-center">
      <Header />
      <div className=" mt-12 flex flex-col items-start max-w-[40vw] w-[100%]">
        <button
          className="border-2 border-black rounded-2xl h-[40px] w-[60px]"
          onClick={() => navigation(-1)}
        >
          Back
        </button>
        <h2 className="text-red-950 font-bold text-2xl mt-2">
          Blogs Tagged <span>#{tag}</span>
        </h2>
        <div className="w-full h-[1px] bg-amber-950"></div>
      </div>

      <Blogs />
      <Pagination />
    </div>
  );
}

export default Tag;
