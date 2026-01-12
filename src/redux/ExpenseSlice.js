import { createSlice, nanoid } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, amount, paidBy, peopleCount) {
        return {
          payload: {
            id: nanoid(),
            title,
            amount: Number(amount),
            paidBy,
            peopleCount: Number(peopleCount),
          },
        };
      },
    },
    removeExpense(state, action) {
      return state.filter(e => e.id !== action.payload);
    },
  },
});

export const { addExpense, removeExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
