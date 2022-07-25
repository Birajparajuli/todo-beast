import React from 'react'

const Todo = ({ todos, setTodos, todo }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(el => {
            if (el.id === todo.id) {
                el.completed = !el.completed
            }
            return el
        }
        ))
    }


    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{todo.text}</li>
            <button className='check-btn' onClick={completeHandler} >Check</button>
            <button className='delete-btn' onClick={deleteHandler}>delete</button>
        </div>
    )
}

export default Todo