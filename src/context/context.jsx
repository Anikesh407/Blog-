import { createContext } from "react";
import { useState } from "react";
export const AppContext = createContext();
import { baseUrl } from "../baseUrl";
export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  async function fetchPosts(page = 1, tag = null, category = null) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPosts(data.posts);
      setPage(data.page);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPosts([]);
      setPage(1);
      setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchPosts(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchPosts,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
