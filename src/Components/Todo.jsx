import React, { useRef, useState } from 'react';
import Todoitems from './Todoitems';

const Todo = () => {
    const [todolist, settodolist] = useState([]);
    const inputRef = useRef();

    const add = () => {
        const task = inputRef.current.value.trim();
        if (task === '') return;

        const newTodo = {
            id: Date.now(),
            text: task,
            isComplete: false,
        };

        settodolist((prev) => [...prev, newTodo]);
        inputRef.current.value = '';
    };

    const deleteTodo = (id) => {
        settodolist((prev) => prev.filter((task) => task.id !== id));
    };

    const toggleComplete = (id) => {
        settodolist((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, isComplete: !task.isComplete } : task
            )
        );
    };

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl shadow-lg'>
            {/* Title */}
            <div className='flex items-center mt-5 gap-2'>
                <img
                    src='https://img.icons8.com/ios/50/000000/todo-list.png'
                    alt='todo'
                    className='w-10 h-10'
                />
                <h1 className='text-2xl font-semibold'>To-Do List</h1>
            </div>

            {/* Input Box */}
            <div className='flex items-center gap-3 my-5 rounded-md border-gray-300 p-2'>
                <input
                    ref={inputRef}
                    type='text'
                    placeholder='Add a task'
                    className='bg-slate-100 border-b-4 w-full border-gray-300 focus:outline-none focus:border-blue-500 rounded-md flex-1 h-14 pl-6 pr-2'
                />
                <button
                    onClick={add}
                    className='bg-purple-900 w-32 h-14 text-white text-md rounded-md font-medium cursor-pointer'
                >
                    ADD +
                </button>
            </div>

            {/* List of Tasks */}
            <div>
                {todolist.map((item) => (
                    <Todoitems
                        key={item.id}
                        text={item.text}
                        id={item.id}
                        isComplete={item.isComplete}
                        deleteTodo={deleteTodo}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </div>
        </div>
    );
};

export default Todo;
