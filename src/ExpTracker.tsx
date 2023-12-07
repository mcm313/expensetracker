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
  currency: string;
}

interface Input {
  target: { value: string };
}

//sample rates from fixed.io
const usdrates = {
  success: true,
  timestamp: 1519296206,
  base: "USD",
  date: "2023-12-04",
  rates: {
    PHP: 55.39,
    JPY: 147.28,
  },
};

const jpyrates = {
  success: true,
  timestamp: 1519296206,
  base: "USD",
  date: "2023-12-04",
  rates: {
    PHP: 0.38,
    USD: 0.0068,
  },
};

const phprates = {
  success: true,
  timestamp: 1519296206,
  base: "USD",
  date: "2023-12-04",
  rates: {
    USD: 0.018,
    JPY: 2.66,
  },
};

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

  const [currency, setCurrency] = useState("Peso");

  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputCurrency, setInputCurrency] = useState("Peso");

  function computeTotal(type: string): number {
    let total = 0;
    let newTransactions: number[] = [];

    if (currency === "Peso") {
      transactions.forEach((tran) => {
        if (tran.currency === "Peso") {
          newTransactions.push(tran.amount);
        } else if (tran.currency === "Dollar") {
          newTransactions.push(tran.amount / phprates.rates.USD);
        } else if (tran.currency === "Yen") {
          newTransactions.push(tran.amount / phprates.rates.JPY);
        }
      });
    }

    if (currency === "Dollar") {
      transactions.forEach((tran) => {
        if (tran.currency === "Dollar") {
          newTransactions.push(tran.amount);
        } else if (tran.currency === "Peso") {
          newTransactions.push(tran.amount / usdrates.rates.PHP);
        } else if (tran.currency === "Yen") {
          newTransactions.push(tran.amount / usdrates.rates.JPY);
        }
      });
    }

    if (currency === "Yen") {
      transactions.forEach((tran) => {
        if (tran.currency === "Yen") {
          newTransactions.push(tran.amount);
        } else if (tran.currency === "Peso") {
          newTransactions.push(tran.amount / jpyrates.rates.PHP);
        } else if (tran.currency === "Dollar") {
          newTransactions.push(tran.amount / jpyrates.rates.USD);
        }
      });
    }

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

  function selectCurr(curr: string) {
    setCurrency(curr);
  }

  function addTransaction(name: string, amount: string, currency: string) {
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
          currency: currency,
        },
        ...transactions,
      ]);
    }
    setInputName("");
    setInputAmount("");
    setInputCurrency("Peso");
  }

  const changeName = ({ target }: Input) => {
    setInputName(target.value);
  };

  const changeAmount = ({ target }: Input) => {
    setInputAmount(target.value);
  };

  const changeCurrency = ({ target }: Input) => {
    setInputCurrency(target.value);
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
        <MenuBar selectCurr={selectCurr} currency={currency} />
        <Balance currency={currency} balance={balance} />
        <Summary income={income} expense={expense} currency={currency} />
        <History
          transactions={transactions}
          currency={currency}
          handleClear={handleClear}
          usdrates={usdrates.rates}
          jpyrates={jpyrates.rates}
          phprates={phprates.rates}
        />
        <AddTrans
          addTransaction={addTransaction}
          inputName={inputName}
          inputAmount={inputAmount}
          inputCurrency={inputCurrency}
          changeName={changeName}
          changeAmount={changeAmount}
          changeCurrency={changeCurrency}
        />
      </Grid>
    </Container>
  );
}

export default ExpTracker;
