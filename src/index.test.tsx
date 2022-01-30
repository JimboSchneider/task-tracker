import {render, screen} from "@testing-library/react";
import App from "./App";
import React from "react";

describe("index test", () => {
    test('renders the root', () => {
        render(<App />);
        const linkElement = screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    });
});