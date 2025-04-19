import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import About from "../pages/About";
import ArticleList from "./ArticleList";

const posts = [
  {
    id: 1,
    title: "First Post",
    date: "2023-01-01",
    preview: "This is the first post.",
  },
  {
    id: 2,
    title: "Second Post",
    date: "2023-02-01",
    preview: "This is the second post.",
  },
];

function App() {
  return (
    <>
      <Header name="My Awesome Blog" />
      <Routes>
        <Route path="/" element={<ArticleList posts={posts} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
