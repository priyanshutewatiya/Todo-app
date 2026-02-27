import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </div>
  );
};

export default TransactionList;