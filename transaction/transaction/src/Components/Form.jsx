import React, { useState } from "react";

const Form = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: Number(amount),
      type,
    };

    addTransaction(newTransaction);

    // Reset fields
    setText("");
    setAmount("");
    setType("income");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
};

export default Form;