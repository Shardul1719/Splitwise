import { useSelector } from "react-redux";
import { useMemo, useContext } from "react";
import { AppContext } from "../context/ThemeContext";

const Summary = () => {
  const expenses = useSelector(state => state.expenses);
  const { currency } = useContext(AppContext);

  const total = useMemo(() => {
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }, [expenses]);

  return (
    <h2 className="text-xl mt-4">
      Total Expense: {currency}{total}
    </h2>
  );
};

export default Summary;
