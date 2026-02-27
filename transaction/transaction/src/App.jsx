import { useState } from "react";
import { sum } from "./Components/Utils";
import TransactionList from "./Components/TransactionList";
import Form from "./Components/Form";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const { income, expense } = sum(transactions);
  const balance = income - expense;

  return (
    <div className="app-container">
      <h1 className="app-title">Expense Tracker</h1>

      {/* Balance Card */}
      <div className="balance-card">
        <p>Current Balance</p>
        <h2>₹{balance}</h2>
      </div>

      {/* Income & Expense */}
      <div className="totals">
        <div className="total-box income">
          <p>Income</p>
          <span>₹{income}</span>
        </div>

        <div className="total-box expense">
          <p>Expense</p>
          <span>₹{expense}</span>
        </div>
      </div>

      <Form addTransaction={addTransaction} />

      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;