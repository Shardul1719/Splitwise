import { useContext } from "react";
import { AppContext } from "./context/ThemeContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";

const App = () => {
  const { theme, toggleTheme, toggleCurrency } = useContext(AppContext);

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-md mx-auto">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Expense Splitter</h1>
          <div>
            <button onClick={toggleTheme} className="border px-2 py-1 mr-2">
              Theme
            </button>
            <button onClick={toggleCurrency} className="border px-2 py-1">
              Currency
            </button>
          </div>
        </div>

        <ExpenseForm />
        <ExpenseList />
        <Summary />
      </div>
    </div>
  );
};

export default App;
