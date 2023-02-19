import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './Todolist';




function App() {


	let tasks1 = [
		{ id: 1, title: "CSS", isDone: true },
		{ id: 2, title: "JS", isDone: false },
		{ id: 3, title: "React", isDone: true }
	]
	let tasks2 = [
		{ id: 1, title: "Terminator", isDone: true },
		{ id: 2, title: "XXX", isDone: true },
		{ id: 3, title: "Jentlemns of fortune", isDone: true }
	]


	return (
		<div className="App">
			<TodoList title="What to learn" tasks={tasks1} />
			<TodoList title="Movies" tasks={tasks2} />
		</div>
	);
}


export default App;
