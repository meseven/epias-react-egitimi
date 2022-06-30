import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter Testleri", () => {
  let increaseBtn, decreaseBtn, count;

  it("Arttır butonu", () => {
    render(<Counter />);
    increaseBtn = screen.getByText("Arttır");
    count = screen.getByText("0");

    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  it("Azalt butonu", () => {
    render(<Counter />);
    decreaseBtn = screen.getByText("Azalt");
    count = screen.getByText("0");

    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
