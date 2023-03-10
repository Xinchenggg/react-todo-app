import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	// Run once when the app starts
	useEffect(() => {
		getLocalTodos();
	}, [])

	// Run "filterHandler()" whenever "todos" and "status" changes
	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);

	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter((todo) => todo.completed === true))
				break;
			case "uncompleted":
				setFilteredTodos(todos.filter((todo) => todo.completed === false))
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	// Use local storage
	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
		// console.log(localStorage.getItem("todos"));
	};

	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			const localTodo = JSON.parse(localStorage.getItem("todos"));
			// console.log(localTodo);
			setTodos(localTodo);
		}
	};

	return (
		<div className="App">
			<header>
				<h1>My Todo List</h1>
			</header>
			<Form
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<TodoList
				todos={todos}
				setTodos={setTodos}
				filteredTodos={filteredTodos} />
		</div>
	);
}

export default App;