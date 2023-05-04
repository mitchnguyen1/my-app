import "./Expense.css";
import ExpenseItem from "./ExpenseItem";

function Expense(props) {
  return (
    <>
      <div className="expenses">
      <ExpenseItem
            title={props.title}
            amount={props.amount}
            date={props.date}
          />
      </div>
    </>
  );
}
 export default Expense