import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

const mockArticle = {
  title: "Test Article Title",
  date: "Apr 19, 2025",
  preview: "This is a test preview.",
};

describe("Article Component", () => {
  it("renders the article title", () => {
    render(
      <Article
        title={mockArticle.title}
        date={mockArticle.date}
        preview={mockArticle.preview}
      />
    );
    const titleElement = screen.getByRole("heading", {
      name: mockArticle.title,
      level: 3,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the article date", () => {
    render(
      <Article
        title={mockArticle.title}
        date={mockArticle.date}
        preview={mockArticle.preview}
      />
    );
    const dateElement = screen.getByText(mockArticle.date);
    expect(dateElement).toBeInTheDocument();
  });

  it("renders the article preview", () => {
    render(
      <Article
        title={mockArticle.title}
        date={mockArticle.date}
        preview={mockArticle.preview}
      />
    );
    const previewElement = screen.getByText(mockArticle.preview);
    expect(previewElement).toBeInTheDocument();
  });

  it("renders a default date if none is provided", () => {
    render(<Article title={mockArticle.title} preview={mockArticle.preview} />);
    const defaultDateElement = screen.getByText("January 1, 1970");
    expect(defaultDateElement).toBeInTheDocument();
  });
});
