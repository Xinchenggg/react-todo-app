function TodoItem({ text, todo, todos, setTodos }) {
	// Event
	const deleteHandler = () => {
		setTodos(todos.filter((elem) => elem.id !== todo.id));
		// console.log(todo);
	};

	const completeHandler = () => {
		setTodos(todos.map((item) => {
			if (item.id === todo.id) {
				return {
					...item, completed: !item.completed
				};
			};
			return item;
		}));
	};

	// TODO_2: Add Edit button

	return (
		<div className="todo">
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
			<button className="complete-btn" onClick={completeHandler}>
				<i className="fas fa-check"></i>
			</button>
			<button className="trash-btn" onClick={deleteHandler}>
				<i className="fas fa-trash"></i>
			</button>
		</div>
	);
}

export default TodoItem;