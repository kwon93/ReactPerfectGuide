import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, {useState} from 'react';



const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () =>{
        setTitle("Updated!"); //setTitle()를 통해 ExpenseItem 를 다시 호출한다.
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card> 
        );
    }


export default ExpenseItem;