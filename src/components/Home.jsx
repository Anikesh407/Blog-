import React from "react";
import Header from "./Header";
import Blogs from "./Blogs";
import Pagination from "./Pagination";

function Home() {
  return (
    <div className=" min-h-[100vh] w-full flex flex-col items-center">
      <Header />
      <div className="w-[100%] flex flex-col items-center">
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}

export default Home;
