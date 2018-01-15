import React from 'react'
import { connect } from 'react-redux'
import ExpenseLIstItem from './ExpenseLIstItem';
import selecteExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List component!</h1>      
        {props.expenses.map((expense) => {
            return <ExpenseLIstItem key={expense.id} {...expense} />
        })}
    </div>
)

const mapStateToProps = (state) =>{
    return {
        expenses: selecteExpenses(state.expenses, state.filters) 
        
    }
}

export default  connect(mapStateToProps)(ExpenseList)

