import SearchForm from "../components/SearchForm";
import { render, screen, waitFor } from "../test-utils/testing-library-utils";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("Search Form", () => {
  test("username with more than 3 characters and less than 20 is ok", async () => {
    render(<SearchForm />);

    const button = screen.getByRole("button", { name: /search/i });
    const usernameTextbox = screen.getByRole("textbox", { name: /username/i });
    await userEvent.type(usernameTextbox, "aaaaa", { delay: 1 });
    userEvent.click(button);
    const errorMessage = screen.queryByText(
      /must be between 3 and 20 characters/i
    );
    expect(errorMessage).not.toBeInTheDocument();
  });
  test("subreddit with more than 3 characters and less than 20 is ok", async () => {
    render(<SearchForm />);

    const button = screen.getByRole("button", { name: /search/i });
    const subredditTextbox = screen.getByRole("textbox", {
      name: /subreddit/i,
    });
    await userEvent.type(subredditTextbox, "aaaaa", { delay: 1 });
    userEvent.click(button);
    const errorMessage = screen.queryByText(
      /must be between 3 and 20 characters/i
    );
    expect(errorMessage).not.toBeInTheDocument();
  });
  test("username with less than 3 characters fails", async () => {
    render(<SearchForm />);

    const button = screen.getByRole("button", { name: /search/i });
    const usernameTextbox = screen.getByRole("textbox", { name: /username/i });
    await userEvent.type(usernameTextbox, "aa", { delay: 1 });
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
    await userEvent.type(subredditTextbox, "aa", { delay: 1 });
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
    await userEvent.type(usernameTextbox, "aaaaaaaaaaaaaaaaaaaaa", {
      delay: 1,
    });

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
    await userEvent.type(subredditTextbox, "aaaaaaaaaaaaaaaaaaaaa", {
      delay: 1,
    });
    userEvent.click(button);
    const errorMessage = await screen.findByText(
      /must be between 3 and 20 characters/i
    );
    await waitFor(() => expect(errorMessage).toBeInTheDocument());
  });
});
