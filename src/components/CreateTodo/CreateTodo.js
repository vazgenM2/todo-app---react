import { useState } from 'react';
import './CreateTodo.css'

function CreateTodo({ todos, addTodo }) {

	let [data, setData] = useState('')

	return (
		<div className="create-todo">
			<input type='text' value={data} placeholder='Add Some Todo' className="addTodo" onChange={(e) => {
				setData(e.target.value)
			}} />
			<button className="btn" onClick={(e) => {
				if (data.length) {
					addTodo(data)
					setData('')
				}
			}}>Add</button>
		</div>
	);
}

export default CreateTodo