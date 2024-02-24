import React,{useState} from 'react'
import InsertionData from './components/InsertionData'
import DisplayData from './components/DisplayData'
import './App.css'

function App() {

  const [todo,setTodo] = useState([])

  function updateToDo(text,date){
    let newtodo = [...todo,{todoText:text,todoDate:date}]
    setTodo(newtodo);
  }

  function onDelete(eve){
    let newtodo = todo.filter((e)=> e.todoText !== eve);
    setTodo(newtodo);
  }

  return (
    <>
      <div className="container">
      <InsertionData func={updateToDo}/>        
      <DisplayData dlt={onDelete} todo={todo}/>
      </div>
    </>
  )
}

export default App
