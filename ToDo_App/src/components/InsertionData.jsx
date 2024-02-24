import React,{useState,useRef} from 'react'
import style from './InsertionData.module.css'

function InsertionData({func}) {

    const [todoText,settodoText] = useState('');
    const [todoDate,settodoDate] = useState('');

    const text = (e)=>{
        settodoText(e.target.value)
    }
    const date = (e)=>{
        settodoDate(e.target.value)
    }
    const UpDate = ()=>{

      todoText == false && todoDate == false ? alert("Fill Both Field for better Task Management") : 
      todoText && todoDate == false ? alert("Enter Date for Reminder") == true ? settodoText(todoText) : settodoDate(todoDate)
      : todoText == false && todoDate ? alert("Enter ToDo") : func(todoText,todoDate) == true ? alert("APP IS UNDER MAINTENANCE") :  settodoDate('') || settodoText('')
      

    //  if(todoText == false && todoDate == false){
    //     alert("Fill Both Field for better Task Management")
    //   }else if(todoText && todoDate == false){
    //     alert("Enter Date for Reminder")
    //   }else if(todoText == false && todoDate){
    //     alert("Enter ToDo")
    //   }else{
    //     func(todoText,todoDate)
    //     settodoText('')
    //     settodoDate('')
    //   }

      
        

    }

  return (
    <>
      <div className={style.container}>
      <input className={style.todotext} type='text' onChange={text} value={todoText} placeholder='Enter Your Task'/>
      <input className={style.tododate} type='Date' onChange={date} value={todoDate} placeholder='Select Date'/>
      <button className={style.addbtn} onClick={UpDate}>Add</button>
      </div>
    </>
  )
}

export default InsertionData
