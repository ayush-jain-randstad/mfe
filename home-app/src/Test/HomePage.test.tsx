import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "../Components/HomePage";

test("Testing Input box", () => {
  render(<HomePage />);
  let checkInput = screen.getByRole("textbox");
  let checkInputPlaceholder = screen.getByPlaceholderText("Search Products");
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("id", "default-search");
  expect(checkInput).toHaveAttribute("type", "text");
});

// describe("Test Input box group", () => {
//     test('Testing Input box ', () => {
//         render(<HomePage />);
//         let checkInput = screen.getByRole("textbox");
//         expect(checkInput).toBeInTheDocument();
//       });

//       test('Testing Input box Placeholder', () => {
//         render(<HomePage />);
//         let checkInputPlaceholder = screen.getByPlaceholderText("Search Products")
//         expect(checkInputPlaceholder).toBeInTheDocument();
//       });

//       test('Testing Input box type', () => {
//         render(<HomePage />);
//         let checkInput = screen.getByRole("textbox");
//         expect(checkInput).toHaveAttribute("type","text")
//       });

// })

// test("Testing onClick event", () => {
//   render(<HomePage />);
//   let checkBtn = screen.getByRole("button") as HTMLInputElement;
//   fireEvent.click(checkBtn)
//   expect(screen.getByText("Check Button")).toBeInTheDocument();
// });

test("Testing Onchange event", () => {
  render(<HomePage />);
  let checkInput = screen.getByRole("textbox") as HTMLInputElement;
  fireEvent.change(checkInput, {
    target: {
      value: "red",
    },
  });
  expect(checkInput.value).toBe("red");
});

// beforeAll, beforeEach, afterAll
beforeAll(() => {
    console.log('Run before all hook');    
})
