import React, { useContext, useEffect } from "react";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import { AppContext } from "./context/context";
import Home from "./components/Home";
import Tag from "./components/Tag";
import Category from "./components/Category";

import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";

const App = () => {
  const { fetchPosts } = useContext(AppContext);

  const [searchParams, setSearchparams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchPosts(Number(page), null, category);
    } else {
      fetchPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-auto bg-gray-200 relative overflow-y-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:blogsid" element={<Blogs />} />
        <Route path="/tags/:tag" element={<Tag />} />
        <Route path="/categories/:category" element={<Category />} />
      </Routes>
    </div>
  );
};

export default App;
