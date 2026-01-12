import { useSelector } from "react-redux";
import { useMemo, useContext } from "react";
import { AppContext } from "../context/ThemeContext";

const BalanceSummary = () => {
  const expenses = useSelector(state => state.expenses);
  const { currency } = useContext(AppContext);

  const balances = useMemo(() => {
    const map = {};

    expenses.forEach(exp => {
      const share = exp.amount / exp.participants.length;

      exp.participants.forEach(person => {
        if (!map[person]) map[person] = 0;

        if (person === exp.paidBy) {
          map[person] += exp.amount - share;
        } else {
          map[person] -= share;
        }
      });
    });

    return map;
  }, [expenses]);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Balance Summary</h2>

      {Object.entries(balances).map(([name, amount]) => (
        <p
          key={name}
          className={amount >= 0 ? "text-green-600" : "text-red-600"}
        >
          {name}: {amount >= 0 ? "Gets" : "Owes"} {currency}
          {Math.abs(amount).toFixed(2)}
        </p>
      ))}
    </div>
  );
};

export default BalanceSummary;
