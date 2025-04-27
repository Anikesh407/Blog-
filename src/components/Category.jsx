import React, { useContext } from "react";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import Blogs from "./Blogs";

function Category() {
  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
  const navigation = useNavigate();
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
        <div className="text-red-950 font-bold text-3xl">
          Blogs On <span>{category}</span>
        </div>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
}

export default Category;
