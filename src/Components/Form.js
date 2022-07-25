import '../Styles/Form.css';

const Form = ({ inputText, setInputText, todos, setTodos, setFilter }) => {

    const inputTextHandler = (e) => {

        setInputText(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 10000 }
        ])
        setInputText('');
    }
    const filterHandler = (e) => {
        setFilter(e.target.value);
    }

    return (
        <form >
            <div className="input-group">
                <input value={inputText} onChange={inputTextHandler} type="text" placeholder="Add a new task" />
                <button onClick={submitHandler} type="submit" className='add-btn'>
                    <i className='fa fa-plus btn-ico'></i>
                </button>
            </div>

            <div className="select">
                <select onChange={filterHandler} name="todos" className="filter-todos">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    )
}

export default Form