import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

test("check if contact me is rendering", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const contactme = screen.getByText(/Contact me!/i);
  expect(contactme).toBeInTheDocument();
});
