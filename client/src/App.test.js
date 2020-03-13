import React from "react";
import { render, fireEvent, configure } from "@testing-library/react";
import App from "./App";

test("dark mode toggle works", () => {
   const { getByText } = render(<App />);
   const states = [];
   states.push(fireEvent.click(getByText("Toggle Dark Mode")));
});

test("displays at least 100 players", async () => {
   const { findAllByTestId } = render(<App />);
   const players = await findAllByTestId("player-card");
   expect(players.length).toBeGreaterThanOrEqual(100);
});
