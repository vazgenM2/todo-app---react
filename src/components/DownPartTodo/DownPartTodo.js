import './DownPartTodo.css'

function DownPartTodo({ todos, clearAllComplited }) {

	let clearArr = []

	return (
		<div className='bottom'>
			<p className="completed"> {(todos.filter(todo => todo.complited)).length} / {todos.length} Completed </p>
			<a href="#" className="clear" onClick={(e) => {
				e.preventDefault()
				todos.map(todo => {
					if (!todo.complited) clearArr.push(todo)
				})
				clearAllComplited(clearArr)
				todos = clearArr
			}}>Clear Completed</a>
		</div>
	);
}

export default DownPartTodo