import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/ExpenseSlice";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [peopleCount, setPeopleCount] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !paidBy || !peopleCount) return;

    dispatch(addExpense(title, amount, paidBy, peopleCount));

    setTitle("");
    setAmount("");
    setPaidBy("");
    setPeopleCount("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        className="border p-2 w-full"
        placeholder="Expense title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        type="number"
        placeholder="Total amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        placeholder="Paid by"
        value={paidBy}
        onChange={e => setPaidBy(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        type="number"
        placeholder="Number of people"
        value={peopleCount}
        onChange={e => setPeopleCount(e.target.value)}
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
