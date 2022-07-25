import React from 'react'
import '../Styles/Todo.css'

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
            <div className="todo-icons">
                <button className='check-btn' onClick={completeHandler} >
                    <i className={`fa fa-check-circle`}></i>
                </button>
                <button className='delete-btn' onClick={deleteHandler}>
                    <i className={`fa fa-trash`}></i>
                </button>
            </div>
        </div>
    )
}

export default Todo