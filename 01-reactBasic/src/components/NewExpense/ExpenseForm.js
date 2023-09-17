import './ExpenseForm.css';

const ExpenseForm = () => {


    const titleChangeHandler = e => {
        console.log(e.target.value);
    };

    return(
        <form action="get">
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label for="">Title</label>
                    <input type="text " onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label for="">Amount</label>
                    <input type="number" min="0.01" step="0.01"/>
                </div>
                <div className='new-expense__control'>
                    <label for="">Date</label>
                    <input type="date" min="2023-09-17" max="2023-12-31"/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;