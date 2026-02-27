import React from "react";

const TransactionItem = ({ transaction, deleteTransaction }) => {
  return (
    <div>
      <span>
        {transaction.text} - ₹{transaction.amount} ({transaction.type})
      </span>

      <button onClick={() => deleteTransaction(transaction.id)}>
        Delete
      </button>
    </div>
  );
};

export default TransactionItem;