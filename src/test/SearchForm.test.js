import SearchForm from "../components/SearchForm";
import { render, screen, waitFor } from "../test-utils/testing-library-utils";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("Search Form", () => {
  test("Submit blank form fails", async () => {
    render(<SearchForm />);

    const button = screen.getByRole("button", { name: /search/i });

    userEvent.click(button);

    const errorMessage = await screen.findByText(/Required/i);
    expect(errorMessage).toBeInTheDocument();
  });
  test("username with less than 3 characters fails", async () => {
    render(<SearchForm />);

    const button = screen.getByRole("button", { name: /search/i });
    const usernameTextbox = screen.getByRole("textbox", { name: /username/i });
    userEvent.type(usernameTextbox, "aa");
    userEvent.click(button);
    const errorMessage = await screen.findByText(
      /must be between 3 and 20 characters/i
    );
    expect(errorMessage).toBeInTheDocument();
  });
  test("subreddit with less than 3 characters fails", async () => {
    render(<SearchForm />);

    const button = screen.getByRole("button", { name: /search/i });
    const subredditTextbox = screen.getByRole("textbox", {
      name: /subreddit/i,
    });
    userEvent.type(subredditTextbox, "aa");
    userEvent.click(button);
    const errorMessage = await screen.findByText(
      /must be between 3 and 20 characters/i
    );
    await waitFor(() => expect(errorMessage).toBeInTheDocument());
  });

  test("username with more than 20 characters fails", async () => {
    render(<SearchForm />);

    const button = screen.getByRole("button", { name: /search/i });
    const usernameTextbox = screen.getByRole("textbox", { name: /username/i });

    userEvent.type(usernameTextbox, "aaaaaaaaaaaaaaaaaaaaa");

    userEvent.click(button);
    const errorMessage = await screen.findByText(
      /must be between 3 and 20 characters/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("subreddit with more than 20 characters fails", async () => {
    render(<SearchForm />);

    const button = screen.getByRole("button", { name: /search/i });
    const subredditTextbox = screen.getByRole("textbox", {
      name: /subreddit/i,
    });

    userEvent.type(subredditTextbox, "aaaaaaaaaaaaaaaaaaaaa");
    userEvent.click(button);
    const errorMessage = await screen.findByText(
      /must be between 3 and 20 characters/i
    );
    await waitFor(() => expect(errorMessage).toBeInTheDocument());
  });
});
