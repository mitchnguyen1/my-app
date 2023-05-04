import Expense from "./components/Expense";

import "./App.css";

function App() {
  const expenses = [
    {
      id: 1,
      title: "car insurance",
      amount: 249.89,
      date: new Date(2022, 10, 18),
    },
    {
      id: 2,
      title: "moto insurance",
      amount: 23.89,
      date: new Date(2022, 9, 5),
    },
    {
      id: 3,
      title: "bike insurance",
      amount: 439.89,
      date: new Date(2022, 11, 1),
    },
    {
      id: 4,
      title: "test insurance",
      amount: 239.89,
      date: new Date(2022, 8, 10),
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {expenses.map((expense) => (
            <Expense
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
