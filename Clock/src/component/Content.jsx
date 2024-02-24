import React,{useContext} from 'react'
// import style from './Content.module.css'
import '../App.css'
import {AplContext} from "../context/contextContainer"

function Content() {
  const {theme} = useContext(AplContext);
  // console.log(theme)
  return (
    <>
      <div className= 'main' id={theme === 'light'? 'dark' : 'light'}>
        <h1>ZAINAB</h1>
      </div>
      
    </>
  )
}

export default Content
