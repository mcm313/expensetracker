import { useState, useEffect } from "react";
import "./App.css";
import { Container, Grid } from "@mui/material";
import MenuBar from "./Components/MenuBar";
import Balance from "./Components/Balance";
import Summary from "./Components/Summary";
import History from "./Components/History";
import AddTrans from "./Components/AddTrans";

interface Trans {
  id: number;
  date: string;
  name: string;
  amount: number;
}

interface Input {
  target: { value: string };
}
function ExpTracker() {
  const value = localStorage.getItem("transactions");

  function TransInitialState(): Trans[] {
    if (typeof value === "string") {
      return JSON.parse(value);
    } else {
      return [];
    }
  }

  const [transactions, setTransactions] = useState(TransInitialState());

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");

  function computeTotal(type: string): number {
    let total = 0;
    let newTransactions: number[] = [];

    transactions.forEach((tran) => newTransactions.push(tran.amount));

    if (type === "income") {
      newTransactions.forEach((tran) => {
        if (tran > 0) {
          total = total + tran;
        }
      });
    }
    if (type === "expense") {
      newTransactions.forEach((tran) => {
        if (tran < 0) {
          total = total + tran;
        }
      });
    }
    if (type === "balance") {
      newTransactions.forEach((tran) => {
        total = total + tran;
      });
    }
    return total;
  }

  const income: number = computeTotal("income");
  const expense: number = computeTotal("expense");
  const balance: number = computeTotal("balance");

  function addTransaction(name: string, amount: string) {
    const newNumber = Number(amount);
    const id = Date.now();
    const event = new Date();
    const date =
      event.getFullYear() +
      "/" +
      (event.getMonth() + 1) +
      "/" +
      event.getDate();
    if (!Number.isNaN(newNumber)) {
      setTransactions([
        {
          id: id,
          date: date,
          name: name,
          amount: newNumber,
        },
        ...transactions,
      ]);
    }
    setInputName("");
    setInputAmount("");
  }

  const changeName = ({ target }: Input) => {
    setInputName(target.value);
  };

  const changeAmount = ({ target }: Input) => {
    setInputAmount(target.value);
  };

  function handleClear() {
    setTransactions([]);
  }

  return (
    <Container fixed>
      <Grid
        container
        px={1}
        justifyContent="center"
        minWidth={450}
        overflow="auto"
      >
        <MenuBar />
        <Balance balance={balance} />
        <Summary income={income} expense={expense} />
        <History transactions={transactions} handleClear={handleClear} />
        <AddTrans
          addTransaction={addTransaction}
          inputName={inputName}
          inputAmount={inputAmount}
          changeName={changeName}
          changeAmount={changeAmount}
        />
      </Grid>
    </Container>
  );
}

export default ExpTracker;
