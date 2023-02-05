import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos, filteredTodos }) {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodos.map((todo) => (
					<TodoItem
						key={todo.id}
						text={todo.text}
						todos={todos}
						todo={todo}
						setTodos={setTodos}
					/>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
