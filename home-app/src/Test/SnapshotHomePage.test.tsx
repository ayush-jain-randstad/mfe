import { render } from "@testing-library/react";
import HomePage from "../Components/HomePage";

test("Snapshot testing for Home Page", () => {
    const container = render(<HomePage />)
    expect(container).toMatchSnapshot()
})