import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
function ExpensesList(props){
    if(props.list.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
    return (
        <ul className='expenses-list'>
            {props.list.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}>
        </ExpenseItem>
      ))}
        </ul>
    );
    
}
export default ExpensesList;