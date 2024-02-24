import React from 'react'
import style from './ItemsList.module.css'

export default function ItemsList({singleitem , Del}) {
  return (
    <>
    <div className={style.item}>
       <li className={style.list}>{singleitem}</li>
       <button className={style.addbtn} onClick={()=>Del(singleitem)}>Delete</button>
       </div>
    </>
  )
}
