import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Todos } from "./todos";

describe("<Todos/>", () => {
  test("render header title", () => {
    render(<Todos />);
    // const title = screen.getByText(/Todo App/i);
    const title = screen.getByRole("heading", { name: /Todo App/i });
    expect(title).toBeInTheDocument();
  });

  test("displays input form", () => {
    render(<Todos />);
    const input = screen.getByPlaceholderText("Todo");
    expect(input).toBeInTheDocument();

    const addButton = screen.getByRole("button", { name: "Add" });
    expect(addButton).toHaveTextContent("Add");
  });

  test("displays empty message when no todos", () => {
    render(<Todos />);
    expect(screen.getByText(/There are no todos/i)).toBeInTheDocument();
  });

  test("add new todo", async () => {
    render(<Todos />);

    const input = screen.getByPlaceholderText(/Todo/i);
    await user.type(input, "Play Golf");

    const addButton = screen.getByRole("button", { name: "Add" });
    await user.click(addButton);

    expect(screen.getByText(/Play Golf/i)).toBeInTheDocument();
  });
});
