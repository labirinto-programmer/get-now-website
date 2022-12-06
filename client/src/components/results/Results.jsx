import React from 'react';
import './Results.css';

const Results = (props) => {
    return (
        <div className='results-box'>
            <p className='results-text'>
                {props.text}
            </p>
            {props.children}
        </div>
    )
}

export default Results;