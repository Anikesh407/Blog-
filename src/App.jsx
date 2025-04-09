import React, { useContext, useEffect } from "react";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import { AppContext } from "./context/context";

const App = () => {
  const { fetchPosts } = useContext(AppContext);
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-auto bg-gray-200 relative">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
};

export default App;
