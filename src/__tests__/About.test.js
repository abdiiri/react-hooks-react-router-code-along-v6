import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../pages/About";
import { BrowserRouter } from "react-router-dom";

describe("About Component", () => {
  it("renders the 'This is my about component!' text", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    const aboutTextElement = screen.getByText("This is my about component!");
    expect(aboutTextElement).toBeInTheDocument();
  });
});
