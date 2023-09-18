import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredTtile, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // })

    const titleChangeHandler = e => {
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : e.target.value,
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: e.target.value};
        // })
    };

    const amountChangeHandler = e => {
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : e.target.value,
        // })
    };

    const dateChangeHandler = e => {
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate : e.target.value,
        // })
    };

    const inputChangehandler = (identifier, value) => {

        if(identifier === 'title'){
            setEnteredTitle(value);
        }else if(identifier === 'date'){
            setEnteredDate(value);
        }else{
            setEnteredAmount(value);
        }

    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTtile,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return(
        <form action="get" onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label for="">Title</label>
                    <input type="text " 
                    value={enteredTtile}
                    onChange={e => {inputChangehandler('title',e.target.value)}}
                    />
                </div>
                <div className='new-expense__control'>
                    <label for="">Amount</label>
                    <input type="number" min="0.01" step="0.01"
                    value={enteredAmount}
                    onChange={e => {inputChangehandler('amount',e.target.value)}}
                    />
                </div>
                <div className='new-expense__control'>
                    <label for="">Date</label>
                    <input type="date" min="2023-09-17" max="2023-12-31"
                    value={enteredDate}
                    onChange={e => {inputChangehandler('date',e.target.value)}}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;