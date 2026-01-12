import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [currency, setCurrency] = useState("₹");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "₹" ? "$" : "₹"));
  };

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, currency, toggleCurrency }}
    >
      {children}
    </AppContext.Provider>
  );
};
