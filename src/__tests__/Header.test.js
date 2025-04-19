import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom"; // Needed for components using Link/NavLink

describe("Header Component", () => {
  it("renders the blog name", () => {
    render(
      <BrowserRouter>
        <Header name="My Awesome Blog" />
      </BrowserRouter>
    );
    const headingElement = screen.getByRole("heading", {
      name: "My Awesome Blog",
      level: 1,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
