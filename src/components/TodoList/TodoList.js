import React from 'react';

const TodoList = (props) => {

    const todoList = props.todoList.map((item, i) => {
        return (
            <p key={i}>
                <input type="checkbox" onChange={(event) => props.changed(event, i)} />
                <label>{item}</label>
            </p>
        )

    })

    return (
        <div>
            <h1>To-Do's</h1>
            <ul>
                {todoList}
            </ul>
        </div>
    )
}

export default TodoList;