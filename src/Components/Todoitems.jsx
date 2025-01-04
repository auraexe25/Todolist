import React from 'react';
import blankicon from '../assets/blankicon.jpg';
import doneicon from '../assets/doneicon.jpg';
import deleteicon from '../assets/deleteicon.jpg';

const Todoitems = ({ text, id, isComplete, deleteTodo, toggleComplete }) => {
    return (
        <div
            className={`flex items-center my-3 gap-2 ${
                isComplete ? 'opacity-60 line-through' : ''
            }`}
        >
            <div
                className='flex flex-1 items-center cursor-pointer gap-2'
                onClick={() => toggleComplete(id)}
            >
                <img
                    src={isComplete ? doneicon : blankicon}
                    height={25}
                    width={25}
                    alt={isComplete ? 'Task Completed' : 'Mark as Complete'}
                />
                <p className='text-slate-700 ml-4 text-[18px]'>{text}</p>
            </div>
            <img
                onClick={() => deleteTodo(id)}
                src={deleteicon}
                height={35}
                width={35}
                alt='Delete Task'
                className='cursor-pointer'
            />
        </div>
    );
};

export default Todoitems;
