import React from 'react'
import Todo from './Todo'

import '../Styles/List.css'

const List = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list-item'>
                {filteredTodos.map(todo => (
                    <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
                ))}
            </ul>

        </div>
    )
}

export default List