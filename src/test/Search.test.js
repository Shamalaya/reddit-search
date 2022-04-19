import App from "../App";
import React from "react";
import { render, screen } from "../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";

test("handles error for no result", async () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /search/i });
  const usernameTextbox = screen.getByRole("textbox", { name: /username/i });
  await userEvent.type(usernameTextbox, "tizio", {
    delay: 1,
  });

  await userEvent.click(button, { delay: 1 });

  const result = await screen.findByText(
    /I really love hearing this feedback. Thanks!/i
  );
  expect(result).toBeInTheDocument();
});
