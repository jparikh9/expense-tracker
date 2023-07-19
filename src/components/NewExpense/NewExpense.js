import React, {useState} from 'react';
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

    const [formState, setFormState] = useState(false);
    function changeFormState(){
        setFormState(true);
    }
    function cancelFormState(){
        setFormState(false);
    }
    let formCode;
    let buttonCode;
    if(formState){
        formCode = (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelButton={cancelFormState}></ExpenseForm>);
    }
    else{
        buttonCode = (<button onClick={changeFormState}>Add New Expense</button>);
    }
    return (<div className='new-expense'>
        {formCode}
        {buttonCode}
        
    </div>);
};
export default NewExpense;