jest.mock("axios", () => {
  const mockAxios = { get: jest.fn(), post: jest.fn(), delete: jest.fn() };
  return { __esModule: true, default: mockAxios, ...mockAxios };
});

import { render, screen } from "@testing-library/react";
import axios from "axios";
import App from "./App";
import ShopContextProvider from "./Context/ShopContext";
import ThemeProvider from "./Context/themeprovider";

beforeEach(() => {
  axios.get.mockResolvedValue({ data: [] });
  axios.post.mockResolvedValue({ data: {} });
  axios.delete.mockResolvedValue({ data: {} });
});

const routes = ["/", "/login", "/otp", "/register", "/cart", "/men", "/women", "/kids", "/product/1"];

routes.forEach((path) => {
  test(`route ${path} renders without crashing`, () => {
    window.history.pushState({}, "", path);
    render(
      <ThemeProvider>
        <ShopContextProvider>
          <App />
        </ShopContextProvider>
      </ThemeProvider>
    );
    expect(screen.getByAltText("Shoppy")).toBeInTheDocument();
  });
});
