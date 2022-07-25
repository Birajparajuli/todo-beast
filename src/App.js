import React, { useState, useEffect } from 'react'

// Components Import
import Form from "./Components/Form";
import List from "./Components/List";
import NavBar from "./Components/NavBar";
function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Fetch from Local Storage Once
  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    selectHandler();
    localStorage.setItem('todos', JSON.stringify(todos))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, filter]);


  const selectHandler = () => {
    switch (filter) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'incomplete':
        setFilteredTodos(todos.filter(todo => todo.completed === false))

        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }



  const getLocalTodos = () => {
    if (localStorage.getItem(todos)) {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    } else {
      setTodos([])
    }
  }





  return (
    <div>
      <NavBar />
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setFilter={setFilter} />
      <List todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
