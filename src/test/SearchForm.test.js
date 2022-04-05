import SearchForm from "../components/SearchForm";
import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";

test("Submit blank form fails", async () => {
  render(<SearchForm />);

  userEvent.click(screen.getByRole("button", { name: /search/i }));
  const errorMessage = await screen.findByText(/Required/i);

  expect(errorMessage).toBeInTheDocument();
});
