import React from 'react'
import Items from './Items'

function DisplayData({todo,dlt}) {
    return (
        <>
    {todo.map((e,i)=>(
       <Items key={i} text={e.todoText} date={e.todoDate} ondlt={dlt}/>
    ))}
    </>
  )
}

export default DisplayData
