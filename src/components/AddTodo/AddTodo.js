import React from 'react';

const AddTodo = (props) => {
    return (
        <div>
            <h1>My To-do App</h1>
            <input value={props.inputVal} onChange={props.onValChange} type="text" placeholder="Add to-do item" />
            <button disabled={!props.inputVal} onClick={props.onAddItem}>Add</button>
        </div>
    )
}

export default AddTodo;