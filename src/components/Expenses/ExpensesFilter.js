import React from 'react';
import {useState} from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const [selectedYear, setSelectedYear] = useState('');
    const yearChangeHandler = (event) => {
        const selectedYear = event.target.value;
        setSelectedYear(selectedYear)
        props.onChangeFilter(selectedYear)
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value ={selectedYear} onChange={yearChangeHandler}>
                    <option value = ''>ALL</option>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;