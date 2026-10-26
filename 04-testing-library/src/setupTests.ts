import { afterEach } from "vitest";
import "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});