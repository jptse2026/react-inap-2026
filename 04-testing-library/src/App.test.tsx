 import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "./App"


describe("Test sobre el componente App", () => {

    it("Comienza el contador en cero", () => {
        render(<App />);
        expect(screen.getByRole("heading")).toHaveTextContent("Contador : 0");
    });

    it("suma con el boton ++", async () => {
        const user = userEvent.setup();
        render(<App />);
        
        const sumar = screen.getByRole("button", { name : "Count ++"});

        await user.click(sumar);
        await user.click(sumar);

        expect(screen.getByRole("heading")).toHaveTextContent("Contador : 2");

    })

    it("resta 1 con el boton --", async () => {
        const user = userEvent.setup();
        render(<App />);
        
        const sumar = screen.getByRole("button", { name : "Count ++"});
        const restar = screen.getByRole("button", { name : "Count --"});

        await user.click(sumar);
        await user.click(sumar);
        await user.click(restar);

        expect(screen.getByRole("heading")).toHaveTextContent("Contador : 1");

    });

    it("no baja de cero al restar", async () => {
        const user = userEvent.setup();
        render(<App />);
        
        const restar = screen.getByRole("button", { name : "Count --"});

        await user.click(restar);

        expect(screen.getByRole("heading")).toHaveTextContent("Contador : 0");

    });


})


