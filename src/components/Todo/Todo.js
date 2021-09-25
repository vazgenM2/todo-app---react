import { useState } from 'react';
import './Todo.css'

function Todo({ todos, id, name, todo, DelItem, changeComplited }) {

	let newArr = []

	return (
		<div className="todo">
			<div className={'todo-'+todo.complited}>
				<input type='checkbox' className="checkbox" checked={todo.complited} onChange={(e) => {
					changeComplited({ ...todo, complited: e.target.checked })
				}} />
				<span className="name">{name}</span>
			</div>
			<a href='#' className="del-todo" onClick={(e) => {
				e.preventDefault()
				todos.map(todo => {
					if (todo.name !== name) {
						newArr.push(todo)
					}
				})
				DelItem(newArr, id)
			}}>Del</a>
		</div>
	);
}

export default Todo