import { useSelector, useDispatch } from "react-redux";
import { removeExpense } from "../redux/ExpenseSlice";
import { useContext } from "react";
import { AppContext } from "../context/ThemeContext";

const ExpenseList = () => {
  const expenses = useSelector(state => state.expenses);
  const dispatch = useDispatch();
  const { currency } = useContext(AppContext);

  return (
    <div className="mt-6 space-y-4">
      {expenses.map(exp => {
        const share = exp.amount / exp.peopleCount;

        return (
          <div key={exp.id} className="border p-3 rounded">
            <p className="font-semibold">{exp.title}</p>
            <p>Total: {currency}{exp.amount}</p>
            <p>Paid by: {exp.paidBy}</p>
            <p>Split between {exp.peopleCount} people</p>

            <p className="mt-1">
              Each person pays: {currency}{share}
            </p>

            <p className="text-green-600">
              {exp.paidBy} should get back {currency}{exp.amount - share}
            </p>

            <button
              onClick={() => dispatch(removeExpense(exp.id))}
              className="text-red-500 mt-2"
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseList;
