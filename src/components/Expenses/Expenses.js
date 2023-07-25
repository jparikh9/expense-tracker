//import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import React, { useState } from 'react';
import ExpenseChart from './ExpenseChart';
function Expenses(props) {
  //const expenses = props.list;
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    //console.log(selectedYear);
  }

  //filtering expenses based on selected year
  const filteredExpense = props.list.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  //rendered list with map()
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}></ExpensesFilter>
      <ExpenseChart expenses={filteredExpense} />
      <ExpensesList list={filteredExpense}></ExpensesList>
      
    </Card>

  );
}

export default Expenses;