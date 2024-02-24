import React,{useState} from 'react';
import Header from './Components/Header';
import InsertionData from './Components/InsertionData';
import DisplayContainer from './Components/DisplayContainer';
import ErrorMsg from './Components/ErrorMsg';
import './App.css';

const App = ()=> {
  // const [item,setItem] = useState(['Sabzi','Dall Chawal','Lasi',"parata"]);
  const [item,setItem] = useState([]);

  
  const addItem = (newItem)=>{
    let arr = [...item,newItem];
    setItem(arr)
  }

    const delItem = (text)=>{
      let newitem = item.filter((e)=>e !== text)
      setItem(newitem)
    }

  return (
    <>

      <Header/>

    <div className="mainContainer">
    <div className="miniContainer">
      <InsertionData add={addItem}/>
      {item == ""? <ErrorMsg/> : <DisplayContainer Del={delItem} items={item}/>}
      
      </div>
      </div>

    </>
  )
}

export default App;