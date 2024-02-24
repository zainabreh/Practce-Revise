import React,{useContext} from 'react'
import Items from './Items'
import {ContextAPI} from '../Data/TodoContext'

function DisplayData() {

  const {todo} = useContext(ContextAPI)
    return (
        <>
    {todo.map((e,i)=>(
       <Items key={i} text={e.todoText} date={e.todoDate}/>
    ))}
    </>
  )
}

export default DisplayData
