import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/context";
const Header = () => {
  const { loading } = useContext(AppContext);
  console.log(loading);
  return (
    <div className=" text-3xl font-bold black h-[40px] w-[100%] border-b-gray-400 border-b-2 flex justify-center items-center bg-white fixed top-0">
      CODEHELP BLOGS
    </div>
  );
};

export default Header;
