// import hooks from 'App.js'
function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
	const inputTextHandler = (e) => {
		// console.log(e.target.value);
		setInputText(e.target.value);
	};

	// TODO_3: Add date and time picker for deadline

	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Date.now() },
		]);
		setInputText("");

		// TODO_1: Check if input string is empty
		// if (inputText === "") {
		// 	console.log("empty");
		// } else {
		// 	setTodos([
		// 		...todos,
		// 		{ text: inputText, completed: false, id: Date.now() },
		// 	]);
		// 	setInputText("");
		// }
	};

	const statusHandler = (e) => {
		// console.log(e.target.value);
		setStatus(e.target.value);
	};

	return (
		<form>
			<input
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
