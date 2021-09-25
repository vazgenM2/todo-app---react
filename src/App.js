import './App.css';
import CreateTodo from './components/CreateTodo/CreateTodo';
import Todo from './components/Todo/Todo';
import DownPartTodo from './components/DownPartTodo/DownPartTodo';
import { useState } from 'react';

function App() {

  let [todos, setTodos] = useState([
    { id: Math.random(), name: 'Learn React Js', complited: false },
    { id: Math.random(), name: 'Learn Node Js', complited: false },
    { id: Math.random(), name: 'Learn Express Js', complited: false },
    { id: Math.random(), name: 'Learn MongoDB', complited: false },
    { id: Math.random(), name: 'Learn Vue Js', complited: false }
  ])

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>

      <div className="board">
        <CreateTodo todos={todos} addTodo={(data) => {
          setTodos([...todos, { id: Math.random(), name: data, complited: false }])
          console.log(todos)
        }} />
        <div className="todos">
          {
            (todos.length ?
            todos.map((todo, i) => {
              return <Todo todo={todo} DelItem={(arr, id) => {
                setTodos([...arr])
              }} changeComplited={(newTodo) => {
                setTodos(todos.map(todo => {
                  if (todo.id == newTodo.id) {
                    return newTodo
                  }
                  return todo
                }))
              }} todos={todos} name={todo.name} complited={todo.complited} key={i} id={i} setTodos={setTodos} />
            })
            : <p className='notodos'>No Todos:(</p>)
          }
        </div>
        <DownPartTodo todos={todos} clearAllComplited={(arr) => {
          setTodos([...arr])
        }} />

      </div>
    </div>
  );
}

export default App;
