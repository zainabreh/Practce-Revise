import React,{useContext} from 'react'
import style from './Items.module.css'
import {ContextAPI} from '../Data/TodoContext'

function Items({text,date}) {

  const {onDelete} = useContext(ContextAPI)

  return (
    <>
       <div className={style.container}>
            <p className={style.todoText}>{text}</p>
            <p className={style.todoDate}>{date}</p>
            <button className={style.dltbtn} type='button' onClick={()=>onDelete(text)}>Delete</button>
        </div>
    </>
  )
}

export default Items
