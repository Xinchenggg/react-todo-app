// import hooks from 'App.js'
function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
	const inputTextHandler = (e) => {
		// console.log(e.target.value);
		setInputText(e.target.value);
	};

	// TODO_3: Add date and time picker for deadline

	const submitTodoHandler = (e) => {
		e.preventDefault();

		// TODO_1.1: Update alert style
		if (inputText === "") {
			alert('Empty input!');
		} else {
			setTodos([
				...todos,
				{ text: inputText, completed: false, id: Date.now() },
			]);
			setInputText("");
		}
		document.getElementById("add-todo").focus();
	};

	const statusHandler = (e) => {
		// console.log(e.target.value);
		setStatus(e.target.value);
	};

	return (
		<form>
			<input
				id="add-todo"
				className="todo-input"
				type="text"
				value={inputText}
				required
				maxLength={60}
				onChange={inputTextHandler}
			/>
			<button
				className="todo-button"
				type="submit"
				onClick={submitTodoHandler}
			>
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select onChange={statusHandler} name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
}

export default Form;
