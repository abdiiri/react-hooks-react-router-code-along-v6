import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";
import { BrowserRouter } from "react-router-dom";

const mockPosts = [
  {
    id: 1,
    title: "Test Title 1",
    date: "Jan 1, 2023",
    preview: "Test Preview 1",
  },
  {
    id: 2,
    title: "Test Title 2",
    date: "Feb 15, 2023",
    preview: "Test Preview 2",
  },
];

describe("ArticleList Component", () => {
  it("renders a <main> element", () => {
    render(
      <BrowserRouter>
        <ArticleList posts={mockPosts} />
      </BrowserRouter>
    );
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });

  it("renders the correct number of Article components", () => {
    render(
      <BrowserRouter>
        <ArticleList posts={mockPosts} />
      </BrowserRouter>
    );
    const articleElements = screen.getAllByRole("article");
    expect(articleElements).toHaveLength(mockPosts.length);
  });
});
