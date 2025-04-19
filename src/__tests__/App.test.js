import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App"; // Assuming your main App component is here
import { BrowserRouter } from "react-router-dom";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const appElement = screen.getByRole("banner"); // Adjust based on your App's structure
    expect(appElement).toBeInTheDocument();
  });

  it("renders the Home page initially", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const homeHeading = screen.getByText("Home!");
    expect(homeHeading).toBeInTheDocument();
  });
});
