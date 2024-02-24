import React from 'react'
import style from './Items.module.css'

function Items({text,date,ondlt}) {
  return (
    <>
       <div className={style.container}>
            <p className={style.todoText}>{text}</p>
            <p className={style.todoDate}>{date}</p>
            <button className={style.dltbtn} type='button' onClick={()=>ondlt(text)}>Delete</button>
        </div>
    </>
  )
}

export default Items
