import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/home/Hero";
import '@testing-library/jest-dom/extend-expect';


describe("Hero component", () => {
    test("renders hero section", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
       
    });
        
});

