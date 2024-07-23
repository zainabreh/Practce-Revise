// import React, { useRef, useState } from 'react'

// const App = () => {
//     let [todo,setTodo] = useState([]);
//     let val = useRef();    
    
    
//     function addtodo(){
//         let userinput = val.current.value;
//         let newTodo = [userinput,...todo]
//         setTodo(newTodo)
//         val.current.value = "";
//     }
//   return (
    
//       <div>
//       <input type="text" id='value' ref={val}/>
//       <button onClick={addtodo}>Add</button>

//       <ul>
//        {
//         todo.map((e)=>(
//             <li>{e}</li>
//         ))
//        }
//       </ul>
//     </div>
//   )
// }

// export default App
import React, { useContext } from "react";
// import Navbar from "./component/Navbar";
// import Background from "./component/Background";
import "./index.css";
import "./App.css";
// import Maincard from "./component/Maincard";
import Daycard from "./Daycard";
import Hourcard from "./Hourcard";
import Datastore, { DataProvider } from "./Datastore";

function App() {
  return (
    <Datastore>
      <div className="container">
        {/* <Background /> */}
        <div className="materialcontainer">
          {/* <Navbar /> */}
          <div className="minicontainer">
            {/* <Maincard /> */}
            <div className="hour">
              <HourcardList />
            </div>
          </div>
          <div className="day">
            <DaycardList />
          </div>
        </div>
      </div>
    </Datastore>
  );
}

const HourcardList = () => {
  const { hourlyData } = useContext(DataProvider);

  return hourlyData.map((data, index) => (
    <Hourcard
      key={index}
      time={data.time}
      icon={data.icon}
      temp={data.temp}
    />
  ));
};

const DaycardList = () => {
  const { weeklyData } = useContext(DataProvider);

  return weeklyData.map((data, index) => (
    <Daycard key={index} day={data.day} icon={data.icon} />
  ));
};

export default App;