import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    //function to store entered new expense data in this file from ExpenseForm
    //example of passing data from child to parent
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        //object to store data
        const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        
    }
    return (<div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>);
};
export default NewExpense;